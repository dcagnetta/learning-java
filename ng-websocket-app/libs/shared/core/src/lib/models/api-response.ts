export interface ApiResponse {
  success: boolean;
  error?: string;
}

export interface ApiResponseOf<T> extends ApiResponse {
  data?: T;
}

