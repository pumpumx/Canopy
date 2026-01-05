

export class ApiResponse {
  message: string
  status: number
  data: object | undefined = {}
  constructor(status: number, message: string, data?: object) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
