

export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status;
    if ("captureStackTrack" in Error) {
      Error.captureStackTrace(this, ApiError)
    }
  }
}
