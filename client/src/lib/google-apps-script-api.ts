// SmartGenEduX Google Apps Script API Integration
// Connect web interface to real Google Sheets data

const API_ENDPOINTS = {
  BEHAVIOR_DISCIPLINE: 'https://script.google.com/macros/s/AKfycbzWNlznigX0xeX4xOv06VqF5_58Prs0_qOAy-qybKsfj3S_W8bQfHabd8eTR-cKw8pM/exec',
  ATTENDANCE_TRACKER: 'https://script.google.com/macros/s/AKfycbxqgRhraU_HMqYXpqUqcIpR7cvkqx9gRDk7KvdLdKdu6mtgnbVJbMs6HEX8uFx7OvAZ/exec',
  FEE_MANAGEMENT: 'https://script.google.com/macros/s/AKfycbygvbHkBfLOBm9tDnEiUDkxunK-msQ3IKY8hHhP_CN1lvFKlDx9xa2s3kSGXgZtHw_5/exec'
};

// Generic API call function
async function callGoogleAppsScript(endpoint: string, action?: string, params?: any) {
  try {
    let url = endpoint;
    if (action) {
      url += `?action=${action}`;
      if (params) {
        const searchParams = new URLSearchParams(params);
        url += `&${searchParams.toString()}`;
      }
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Google Apps Script API Error:', error);
    throw error;
  }
}

// Behavior & Discipline API functions
export const behaviorAPI = {
  // Get behavior analytics
  getAnalytics: () => callGoogleAppsScript(API_ENDPOINTS.BEHAVIOR_DISCIPLINE, 'behaviorAnalytics'),
  
  // Get student behavior info
  getStudentBehavior: (studentId: string) => 
    callGoogleAppsScript(API_ENDPOINTS.BEHAVIOR_DISCIPLINE, 'studentBehavior', { studentId }),
  
  // Get all behavior records
  getAllRecords: () => callGoogleAppsScript(API_ENDPOINTS.BEHAVIOR_DISCIPLINE, 'getAllRecords'),
  
  // Test API connection
  testConnection: () => callGoogleAppsScript(API_ENDPOINTS.BEHAVIOR_DISCIPLINE)
};

// Attendance Tracker API functions
export const attendanceAPI = {
  // Get attendance analytics
  getAnalytics: () => callGoogleAppsScript(API_ENDPOINTS.ATTENDANCE_TRACKER, 'attendanceAnalytics'),
  
  // Get class attendance
  getClassAttendance: (className: string, date: string) => 
    callGoogleAppsScript(API_ENDPOINTS.ATTENDANCE_TRACKER, 'getClassAttendance', { className, date }),
  
  // Get student attendance history
  getStudentAttendance: (studentId: string) => 
    callGoogleAppsScript(API_ENDPOINTS.ATTENDANCE_TRACKER, 'getStudentAttendance', { studentId }),
  
  // Get overall attendance report
  getAttendanceReport: () => callGoogleAppsScript(API_ENDPOINTS.ATTENDANCE_TRACKER, 'getAttendanceReport'),
  
  // Test API connection
  testConnection: () => callGoogleAppsScript(API_ENDPOINTS.ATTENDANCE_TRACKER)
};

// Fee Management API functions
export const feeAPI = {
  // Get fee analytics
  getAnalytics: () => callGoogleAppsScript(API_ENDPOINTS.FEE_MANAGEMENT, 'feeAnalytics'),
  
  // Get class fee records
  getClassFees: (className: string, feeType?: string) => 
    callGoogleAppsScript(API_ENDPOINTS.FEE_MANAGEMENT, 'getClassFees', { className, feeType }),
  
  // Get student fee history
  getStudentFees: (studentId: string) => 
    callGoogleAppsScript(API_ENDPOINTS.FEE_MANAGEMENT, 'getStudentFees', { studentId }),
  
  // Get payment summary
  getPaymentSummary: () => callGoogleAppsScript(API_ENDPOINTS.FEE_MANAGEMENT, 'getPaymentSummary'),
  
  // Get overdue fees
  getOverdueFees: () => callGoogleAppsScript(API_ENDPOINTS.FEE_MANAGEMENT, 'getOverdueFees'),
  
  // Test API connection
  testConnection: () => callGoogleAppsScript(API_ENDPOINTS.FEE_MANAGEMENT)
};

// Test all API connections
export const testAllAPIs = async () => {
  const results = {
    behavior: { status: 'testing', data: null, error: null },
    attendance: { status: 'testing', data: null, error: null },
    fee: { status: 'testing', data: null, error: null }
  };

  try {
    results.behavior.data = await behaviorAPI.testConnection();
    results.behavior.status = 'success';
  } catch (error: any) {
    results.behavior.status = 'error';
    results.behavior.error = error?.message || 'Unknown error';
  }

  try {
    results.attendance.data = await attendanceAPI.testConnection();
    results.attendance.status = 'success';
  } catch (error: any) {
    results.attendance.status = 'error';
    results.attendance.error = error?.message || 'Unknown error';
  }

  try {
    results.fee.data = await feeAPI.testConnection();
    results.fee.status = 'success';
  } catch (error: any) {
    results.fee.status = 'error';
    results.fee.error = error?.message || 'Unknown error';
  }

  return results;
};

// Helper function to check if APIs are available
export const checkAPIHealth = async () => {
  const health = {
    overall: 'healthy',
    services: {
      behavior: false,
      attendance: false,
      fee: false
    },
    errors: []
  };

  try {
    const results = await testAllAPIs();
    
    health.services.behavior = results.behavior.status === 'success';
    health.services.attendance = results.attendance.status === 'success';
    health.services.fee = results.fee.status === 'success';

    if (results.behavior.status === 'error') health.errors.push(`Behavior API: ${results.behavior.error}`);
    if (results.attendance.status === 'error') health.errors.push(`Attendance API: ${results.attendance.error}`);
    if (results.fee.status === 'error') health.errors.push(`Fee API: ${results.fee.error}`);

    const workingServices = Object.values(health.services).filter(Boolean).length;
    if (workingServices === 0) health.overall = 'critical';
    else if (workingServices < 3) health.overall = 'degraded';

  } catch (error) {
    health.overall = 'critical';
    health.errors.push(`System error: ${error.message}`);
  }

  return health;
};