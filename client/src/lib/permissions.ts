// SmartGenEduX Role-Based Access Control System

export interface Permission {
  module: string;
  actions: string[];
  description: string;
}

export const rolePermissions = {
  principal: {
    name: "Principal",
    permissions: [
      {
        module: "dashboard",
        actions: ["view", "analytics", "reports"],
        description: "Complete overview of all school operations"
      },
      {
        module: "exam_management", 
        actions: ["view", "monitor", "approve"],
        description: "Monitor exam processes and approve allocations"
      },
      {
        module: "timetable",
        actions: ["view", "monitor"],
        description: "View all timetables and schedules"
      },
      {
        module: "reports",
        actions: ["view", "export", "analytics"],
        description: "Access all reports and performance analytics"
      },
      {
        module: "question_papers",
        actions: ["view", "approve"],
        description: "Review and approve question papers"
      }
    ]
  },

  incharge: {
    name: "Incharge", 
    permissions: [
      {
        module: "timetable",
        actions: ["create", "edit", "assign", "manage"],
        description: "Create and manage all timetables"
      },
      {
        module: "exam_management",
        actions: ["create", "edit", "allocate_duties", "distribute_students"],
        description: "Handle invigilation duties and student distribution"
      },
      {
        module: "reports",
        actions: ["input", "configure", "setup"],
        description: "Configure report templates and input requirements"
      },
      {
        module: "question_papers", 
        actions: ["create", "configure", "template_setup"],
        description: "Set up question paper templates and configurations"
      },
      {
        module: "dashboard",
        actions: ["view", "operational_metrics"],
        description: "View operational dashboard and metrics"
      }
    ]
  },

  teacher: {
    name: "Teacher",
    permissions: [
      {
        module: "reports",
        actions: ["enter_marks", "input_grades", "submit_forms"],
        description: "Enter student marks and submit required forms"
      },
      {
        module: "timetable",
        actions: ["view_own", "view_schedule"],
        description: "View personal timetable and schedule"
      },
      {
        module: "dashboard",
        actions: ["view_limited"],
        description: "Limited dashboard view for personal information"
      }
    ]
  },

  admin: {
    name: "System Administrator",
    permissions: [
      {
        module: "data_control",
        actions: ["freeze", "unfreeze", "lock", "unlock", "backup"],
        description: "Control data states and prevent accidental changes"
      },
      {
        module: "exam_cycle_management", 
        actions: ["lock_previous", "unlock_current", "cycle_transition"],
        description: "Manage exam cycle transitions and data protection"
      },
      {
        module: "user_management",
        actions: ["manage_permissions", "control_access", "audit"],
        description: "Manage user permissions and system access"
      },
      {
        module: "system_settings",
        actions: ["configure", "backup", "restore", "maintain"],
        description: "System configuration and maintenance"
      },
      {
        module: "all_modules",
        actions: ["monitor", "control", "override"],
        description: "Override access for system maintenance"
      }
    ]
  }
};

export const checkPermission = (userRole: string, module: string, action: string): boolean => {
  const permissions = rolePermissions[userRole as keyof typeof rolePermissions];
  if (!permissions) return false;
  
  const modulePermission = permissions.permissions.find(p => p.module === module || p.module === "all_modules");
  if (!modulePermission) return false;
  
  return modulePermission.actions.includes(action) || modulePermission.actions.includes("override");
};

export const getModuleAccess = (userRole: string, module: string) => {
  const permissions = rolePermissions[userRole as keyof typeof rolePermissions];
  if (!permissions) return { canView: false, canEdit: false, canManage: false };
  
  const modulePermission = permissions.permissions.find(p => p.module === module || p.module === "all_modules");
  if (!modulePermission) return { canView: false, canEdit: false, canManage: false };
  
  return {
    canView: modulePermission.actions.includes("view") || modulePermission.actions.includes("view_own") || modulePermission.actions.includes("monitor"),
    canEdit: modulePermission.actions.includes("edit") || modulePermission.actions.includes("create") || modulePermission.actions.includes("input"),
    canManage: modulePermission.actions.includes("manage") || modulePermission.actions.includes("control") || modulePermission.actions.includes("configure")
  };
};

export const getDataControlPermissions = (userRole: string) => {
  if (userRole !== 'admin') return { canFreeze: false, canLock: false, canTransition: false };
  
  return {
    canFreeze: true,    // Can freeze marks columns after completion
    canLock: true,      // Can lock completed exam data
    canTransition: true // Can transition between exam cycles
  };
};