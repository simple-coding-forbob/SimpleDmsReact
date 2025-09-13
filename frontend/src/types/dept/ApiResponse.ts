
export default interface ApiResponse<T> {
  success: boolean;
  message: string;
  result: T;
  page: number;
  totalNumber: number;
}