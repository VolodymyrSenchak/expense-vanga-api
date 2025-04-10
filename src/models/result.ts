export interface Result<T> {
  result?: T;
  error?: string | Error;
  isSuccess: boolean;
}

export function success<T>(result: T): Result<T> {
  return {
    result,
    isSuccess: true,
  };
}

export function failure<T>(error: string | Error): Result<T> {
  return {
    error,
    isSuccess: false,
  };
}