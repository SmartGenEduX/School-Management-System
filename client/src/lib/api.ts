import { apiRequest } from "./queryClient";

export interface DashboardStats {
  classesToday: number;
  substitutions: number;
  upcomingExams: number;
  generatedPapers: number;
}

export interface ChatbotResponse {
  response: string;
}

// Dashboard API
export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    const response = await apiRequest("GET", "/api/dashboard/stats");
    return response.json();
  },
};

// Timetable API
export const timetableApi = {
  getAll: async () => {
    const response = await apiRequest("GET", "/api/timetables");
    return response.json();
  },
  getById: async (id: number) => {
    const response = await apiRequest("GET", `/api/timetables/${id}`);
    return response.json();
  },
  create: async (data: any) => {
    const response = await apiRequest("POST", "/api/timetables", data);
    return response.json();
  },
};

// Substitution API
export const substitutionApi = {
  getAll: async (params?: { status?: string; date?: string }) => {
    const queryString = params ? new URLSearchParams(params).toString() : "";
    const url = `/api/substitutions${queryString ? `?${queryString}` : ""}`;
    const response = await apiRequest("GET", url);
    return response.json();
  },
  create: async (data: any) => {
    const response = await apiRequest("POST", "/api/substitutions", data);
    return response.json();
  },
  update: async (id: number, data: any) => {
    const response = await apiRequest("PATCH", `/api/substitutions/${id}`, data);
    return response.json();
  },
};

// Exam API
export const examApi = {
  getAll: async (params?: { date?: string; className?: string }) => {
    const queryString = params ? new URLSearchParams(params).toString() : "";
    const url = `/api/exams${queryString ? `?${queryString}` : ""}`;
    const response = await apiRequest("GET", url);
    return response.json();
  },
  create: async (data: any) => {
    const response = await apiRequest("POST", "/api/exams", data);
    return response.json();
  },
};

// Report API
export const reportApi = {
  getAll: async (params?: { type?: string; className?: string }) => {
    const queryString = params ? new URLSearchParams(params).toString() : "";
    const url = `/api/reports${queryString ? `?${queryString}` : ""}`;
    const response = await apiRequest("GET", url);
    return response.json();
  },
  create: async (data: any) => {
    const response = await apiRequest("POST", "/api/reports", data);
    return response.json();
  },
};

// Question Paper API
export const questionPaperApi = {
  getAll: async (params?: { subject?: string }) => {
    const queryString = params ? new URLSearchParams(params).toString() : "";
    const url = `/api/question-papers${queryString ? `?${queryString}` : ""}`;
    const response = await apiRequest("GET", url);
    return response.json();
  },
  create: async (data: any) => {
    const response = await apiRequest("POST", "/api/question-papers", data);
    return response.json();
  },
};

// Question Template API
export const questionTemplateApi = {
  getAll: async (params?: { subject?: string }) => {
    const queryString = params ? new URLSearchParams(params).toString() : "";
    const url = `/api/question-templates${queryString ? `?${queryString}` : ""}`;
    const response = await apiRequest("GET", url);
    return response.json();
  },
  create: async (data: any) => {
    const response = await apiRequest("POST", "/api/question-templates", data);
    return response.json();
  },
};

// Chatbot API
export const chatbotApi = {
  sendMessage: async (message: string): Promise<ChatbotResponse> => {
    const response = await apiRequest("POST", "/api/chatbot", { message });
    return response.json();
  },
};
