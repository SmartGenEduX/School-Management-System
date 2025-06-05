/**
 * Role-based Access Control System
 * Defines what each role can access in the SmartGenEduX platform
 */

export type UserRole = 'super_admin' | 'school_admin' | 'incharge' | 'class_teacher' | 'teacher';

export interface RolePermissions {
  modules: string[];
  canViewAll: boolean;
  canManageUsers: boolean;
  canAccessFinancials: boolean;
}

// Define permissions for each role
export const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  super_admin: {
    modules: [
      'dashboard',
      'timetable',
      'substitution', 
      'reports',
      'report-tracker',
      'questions',
      'question-generator',
      'timetable-manager',
      'exams',
      'exam-setup',
      'invigilation-setup',
      'attendance-tracker',
      'fee-management',
      'behavior-discipline',
      'whatsapp-admin',
      'analytics',
      'admin',
      'data-control',
      'auth-config',
      'teacher-marks',
      'video-messages',
      'invitations',
      'text-to-ppt',
      'vipu',
      'parent-info',
      'payment-portal'
    ],
    canViewAll: true,
    canManageUsers: true,
    canAccessFinancials: true
  },

  school_admin: {
    modules: [
      'dashboard',
      'substitution',
      'fee-management',
      'teacher-marks',
      'attendance-tracker',
      'behavior-discipline',
      'reports',
      'analytics',
      'whatsapp-admin',
      'parent-info'
    ],
    canViewAll: true,
    canManageUsers: false,
    canAccessFinancials: true
  },

  incharge: {
    modules: [
      'dashboard',
      'timetable',
      'timetable-manager',
      'substitution',
      'reports',
      'report-tracker',
      'questions',
      'question-generator',
      'exams',
      'exam-setup',
      'invigilation-setup',
      'attendance-tracker',
      'behavior-discipline',
      'teacher-marks',
      'analytics'
    ],
    canViewAll: false, // Only their division
    canManageUsers: false,
    canAccessFinancials: false
  },

  class_teacher: {
    modules: [
      'dashboard',
      'substitution', // Only leave requests
      'questions', // Question paper submission
      'teacher-marks', // Mark entry for their classes
      'attendance-tracker', // Only their classes
      'behavior-discipline', // Only their students
      'reports' // Only their class reports
    ],
    canViewAll: false, // Only their classes
    canManageUsers: false,
    canAccessFinancials: false
  },

  teacher: {
    modules: [
      'dashboard',
      'substitution', // Only leave request form
      'questions', // Question paper submission form
      'teacher-marks' // Mark entry for subjects they teach
    ],
    canViewAll: false, // Only their subjects/classes
    canManageUsers: false,
    canAccessFinancials: false
  }
};

// Get user permissions based on role
export const getUserPermissions = (role: UserRole): RolePermissions => {
  return ROLE_PERMISSIONS[role] || ROLE_PERMISSIONS.teacher;
};

// Check if user can access a specific module
export const canAccessModule = (userRole: UserRole, module: string): boolean => {
  const permissions = getUserPermissions(userRole);
  return permissions.modules.includes(module);
};

// Get filtered modules for sidebar based on user role
export const getAccessibleModules = (userRole: UserRole) => {
  const permissions = getUserPermissions(userRole);
  
  const allModules = [
    { name: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
    { name: 'Timetable Manager', path: '/timetable-manager', icon: 'Calendar' },
    { name: 'Substitution Management', path: '/substitution', icon: 'UserCheck' },
    { name: 'Exam Management', path: '/exams', icon: 'FileText' },
    { name: 'Exam Setup', path: '/exam-setup', icon: 'Settings' },
    { name: 'Invigilation Setup', path: '/invigilation-setup', icon: 'Eye' },
    { name: 'Question Generator', path: '/question-generator', icon: 'Brain' },
    { name: 'Question Papers', path: '/questions', icon: 'FileQuestion' },
    { name: 'Report Tracker', path: '/report-tracker', icon: 'BarChart3' },
    { name: 'Teacher Marks', path: '/teacher-marks', icon: 'GraduationCap' },
    { name: 'Attendance Tracker', path: '/attendance-tracker', icon: 'UserCheck2' },
    { name: 'Fee Management', path: '/fee-management', icon: 'CreditCard' },
    { name: 'Behavior & Discipline', path: '/behavior-discipline', icon: 'Shield' },
    { name: 'WhatsApp Admin', path: '/whatsapp-admin', icon: 'MessageCircle' },
    { name: 'Analytics', path: '/analytics', icon: 'TrendingUp' },
    { name: 'Reports', path: '/reports', icon: 'FileBarChart' },
    { name: 'Video Messages', path: '/video-messages', icon: 'Video' },
    { name: 'Invitations', path: '/invitations', icon: 'Mail' },
    { name: 'Text to PPT', path: '/text-to-ppt', icon: 'Presentation' },
    { name: 'Parent Info', path: '/parent-info', icon: 'Users' },
    { name: 'Payment Portal', path: '/payment-portal', icon: 'Wallet' },
    { name: 'Admin Panel', path: '/admin', icon: 'Settings2' },
    { name: 'Data Control', path: '/data-control', icon: 'Database' },
    { name: 'Auth Config', path: '/auth-config', icon: 'Lock' }
  ];

  // Filter modules based on role permissions
  return allModules.filter(module => {
    const modulePath = module.path.substring(1); // Remove leading slash
    return permissions.modules.includes(modulePath);
  });
};

// Role display names
export const ROLE_DISPLAY_NAMES: Record<UserRole, string> = {
  super_admin: 'Super Administrator',
  school_admin: 'School Administrator', 
  incharge: 'Division Incharge',
  class_teacher: 'Class Teacher',
  teacher: 'Teacher'
};

// Default user for demo
export const getDemoUser = (role: UserRole) => {
  const baseUser = {
    id: 1,
    username: role === 'super_admin' ? 'admin' : `${role}_user`,
    authenticated: true,
    createdAt: new Date().toISOString()
  };

  switch (role) {
    case 'super_admin':
      return {
        ...baseUser,
        role: 'super_admin' as UserRole,
        name: 'System Administrator',
        email: 'admin@smartgenedux.org',
        division: null,
        assignedClasses: null,
        isClassTeacher: false
      };
    
    case 'school_admin':
      return {
        ...baseUser,
        role: 'school_admin' as UserRole,
        name: 'School Administrator',
        email: 'schooladmin@school.edu',
        division: null,
        assignedClasses: null,
        isClassTeacher: false
      };
    
    case 'incharge':
      return {
        ...baseUser,
        role: 'incharge' as UserRole,
        name: 'Primary Incharge',
        email: 'primary.incharge@school.edu',
        division: 'primary',
        assignedClasses: null,
        isClassTeacher: false
      };
    
    case 'class_teacher':
      return {
        ...baseUser,
        role: 'class_teacher' as UserRole,
        name: 'Class Teacher',
        email: 'classteacher@school.edu',
        division: 'primary',
        assignedClasses: ['5A'],
        isClassTeacher: true
      };
    
    default: // teacher
      return {
        ...baseUser,
        role: 'teacher' as UserRole,
        name: 'Subject Teacher',
        email: 'teacher@school.edu',
        division: 'secondary',
        assignedClasses: ['9A', '9B', '10A'],
        isClassTeacher: false
      };
  }
};