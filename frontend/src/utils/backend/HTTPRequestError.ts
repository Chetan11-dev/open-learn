export default class HTTPRequestError {
  response: Response

  constructor(response: Response) {
    this.response = response
  }
}
