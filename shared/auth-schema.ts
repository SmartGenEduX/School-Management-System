import { z } from "zod";

// User roles with hierarchical permissions
export const UserRole = {
  SUPER_ADMIN: 'super_admin',
  CHIEF_ACCOUNT: 'chief_account', 
  HR_MANAGER: 'hr_manager',
  PRINCIPAL: 'principal',
  VICE_PRINCIPAL: 'vice_principal',
  CLASS_TEACHER: 'class_teacher',
  NON_CLASS_TEACHER: 'non_class_teacher',
  ACCOUNTANT: 'accountant'
} as const;

export type UserRoleType = typeof UserRole[keyof typeof UserRole];

// School user authentication schema
export const authUserSchema = z.object({
  id: z.string(),
  uniqueId: z.string(),
  passcode: z.string(),
  role: z.enum([
    UserRole.SUPER_ADMIN,
    UserRole.CHIEF_ACCOUNT,
    UserRole.HR_MANAGER, 
    UserRole.PRINCIPAL,
    UserRole.VICE_PRINCIPAL,
    UserRole.CLASS_TEACHER,
    UserRole.NON_CLASS_TEACHER,
    UserRole.ACCOUNTANT
  ]),
  schoolId: z.string().optional(), // Super admin monitors all schools
  schoolName: z.string().optional(),
  name: z.string(),
  permissions: z.array(z.string())
});

export type AuthUser = z.infer<typeof authUserSchema>;

// Login form schema
export const loginSchema = z.object({
  uniqueId: z.string().min(1, "Unique ID is required"),
  passcode: z.string().min(1, "Passcode is required")
});

export type LoginForm = z.infer<typeof loginSchema>;

// Permission definitions for role-based access
export const Permissions = {
  // Super Admin - Full system access across all schools
  VIEW_ALL_SCHOOLS: 'view_all_schools',
  MONITOR_ALL_SCHOOLS: 'monitor_all_schools',
  MANAGE_SCHOOL_ONBOARDING: 'manage_school_onboarding',
  
  // Fee Management Permissions
  VIEW_FEE_MANAGEMENT: 'view_fee_management',
  EDIT_FEE_MANAGEMENT: 'edit_fee_management',
  APPROVE_FEE_TRANSACTIONS: 'approve_fee_transactions',
  
  // School Management Permissions
  VIEW_DASHBOARD: 'view_dashboard',
  FULL_MONITORING: 'full_monitoring',
  FULL_CONFIGURATION: 'full_configuration',
  
  // Teacher Permissions
  VIEW_CLASS_RESPONSIBILITIES: 'view_class_responsibilities',
  MANAGE_CLASS_ACTIVITIES: 'manage_class_activities',
  VIEW_NON_CLASS_RESPONSIBILITIES: 'view_non_class_responsibilities',
  
  // General Permissions
  VIEW_REPORTS: 'view_reports',
  MANAGE_ATTENDANCE: 'manage_attendance',
  MANAGE_EXAMS: 'manage_exams'
} as const;

// Role-based permission mapping
export const rolePermissions: Record<UserRoleType, string[]> = {
  [UserRole.SUPER_ADMIN]: [
    Permissions.VIEW_ALL_SCHOOLS,
    Permissions.MONITOR_ALL_SCHOOLS,
    Permissions.MANAGE_SCHOOL_ONBOARDING,
    Permissions.VIEW_FEE_MANAGEMENT,
    Permissions.VIEW_DASHBOARD,
    Permissions.VIEW_REPORTS
  ],
  [UserRole.CHIEF_ACCOUNT]: [
    Permissions.VIEW_FEE_MANAGEMENT,
    Permissions.EDIT_FEE_MANAGEMENT,
    Permissions.APPROVE_FEE_TRANSACTIONS,
    Permissions.VIEW_REPORTS
  ],
  [UserRole.HR_MANAGER]: [
    Permissions.VIEW_FEE_MANAGEMENT,
    Permissions.EDIT_FEE_MANAGEMENT,
    Permissions.VIEW_REPORTS
  ],
  [UserRole.PRINCIPAL]: [
    Permissions.VIEW_DASHBOARD,
    Permissions.FULL_MONITORING,
    Permissions.VIEW_FEE_MANAGEMENT,
    Permissions.VIEW_REPORTS,
    Permissions.MANAGE_ATTENDANCE,
    Permissions.MANAGE_EXAMS
  ],
  [UserRole.VICE_PRINCIPAL]: [
    Permissions.VIEW_DASHBOARD,
    Permissions.FULL_CONFIGURATION,
    Permissions.VIEW_REPORTS,
    Permissions.MANAGE_ATTENDANCE,
    Permissions.MANAGE_EXAMS
  ],
  [UserRole.CLASS_TEACHER]: [
    Permissions.VIEW_CLASS_RESPONSIBILITIES,
    Permissions.MANAGE_CLASS_ACTIVITIES,
    Permissions.MANAGE_ATTENDANCE,
    Permissions.VIEW_REPORTS
  ],
  [UserRole.NON_CLASS_TEACHER]: [
    Permissions.VIEW_NON_CLASS_RESPONSIBILITIES,
    Permissions.MANAGE_ATTENDANCE,
    Permissions.VIEW_REPORTS
  ],
  [UserRole.ACCOUNTANT]: [
    Permissions.VIEW_FEE_MANAGEMENT,
    Permissions.VIEW_REPORTS
  ]
};

// Default user credentials for each role
export const defaultUsers: AuthUser[] = [
  {
    id: '1',
    uniqueId: 'SUPERADMIN001',
    passcode: 'SA2024@EduX',
    role: UserRole.SUPER_ADMIN,
    name: 'Super Administrator',
    permissions: rolePermissions[UserRole.SUPER_ADMIN]
  },
  {
    id: '2', 
    uniqueId: 'CHFACC001',
    passcode: 'CA2024@EduX',
    role: UserRole.CHIEF_ACCOUNT,
    schoolId: 'school_001',
    schoolName: 'Demo High School',
    name: 'Chief Accountant',
    permissions: rolePermissions[UserRole.CHIEF_ACCOUNT]
  },
  {
    id: '3',
    uniqueId: 'HRMGR001', 
    passcode: 'HR2024@EduX',
    role: UserRole.HR_MANAGER,
    schoolId: 'school_001',
    schoolName: 'Demo High School',
    name: 'HR Manager',
    permissions: rolePermissions[UserRole.HR_MANAGER]
  },
  {
    id: '4',
    uniqueId: 'PRIN001',
    passcode: 'PR2024@EduX', 
    role: UserRole.PRINCIPAL,
    schoolId: 'school_001',
    schoolName: 'Demo High School',
    name: 'School Principal',
    permissions: rolePermissions[UserRole.PRINCIPAL]
  },
  {
    id: '5',
    uniqueId: 'VPRIN001',
    passcode: 'VP2024@EduX',
    role: UserRole.VICE_PRINCIPAL,
    schoolId: 'school_001', 
    schoolName: 'Demo High School',
    name: 'Vice Principal',
    permissions: rolePermissions[UserRole.VICE_PRINCIPAL]
  },
  {
    id: '6',
    uniqueId: 'CLSTCH001',
    passcode: 'CT2024@EduX',
    role: UserRole.CLASS_TEACHER,
    schoolId: 'school_001',
    schoolName: 'Demo High School', 
    name: 'Class Teacher - Grade 10A',
    permissions: rolePermissions[UserRole.CLASS_TEACHER]
  },
  {
    id: '7',
    uniqueId: 'NCLSTCH001',
    passcode: 'NCT2024@EduX',
    role: UserRole.NON_CLASS_TEACHER,
    schoolId: 'school_001',
    schoolName: 'Demo High School',
    name: 'Subject Teacher - Mathematics',
    permissions: rolePermissions[UserRole.NON_CLASS_TEACHER]
  },
  {
    id: '8',
    uniqueId: 'ACC001',
    passcode: 'AC2024@EduX',
    role: UserRole.ACCOUNTANT,
    schoolId: 'school_001',
    schoolName: 'Demo High School',
    name: 'School Accountant',
    permissions: rolePermissions[UserRole.ACCOUNTANT]
  }
];