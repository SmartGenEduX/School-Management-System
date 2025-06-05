import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: (failureCount, error: any) => {
        // Don't retry on 401 errors
        if (error?.message?.includes('401')) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

// Custom fetch wrapper with authentication
export async function apiRequest(
  method: string = 'GET',
  url: string,
  data?: any
): Promise<Response> {
  const token = localStorage.getItem('authToken');
  
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };

  if (data && method !== 'GET') {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`${response.status}: ${errorData.message || response.statusText}`);
  }

  return response;
}

// Setup default query function
queryClient.setQueryDefaults([''], {
  queryFn: async ({ queryKey }) => {
    const url = queryKey[0] as string;
    const response = await apiRequest('GET', url);
    return response.json();
  },
});