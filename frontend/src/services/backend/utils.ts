import { getServerUrl } from '../configs/configs'
import { logError } from '../errors/errors'

import { Either, Right, Left } from './Either'
import { NotFoundCode } from './error-codes'
import HTTPRequestError from './HTTPRequestError'

export const isNotFoundErrorCode = (r: Either<number, null> | Either<number, any>) =>
  r.isLeft() && r.left() === NotFoundCode

export const getEndpoint = (path: string) => `${getServerUrl()}/${path}`

export function withJsonContentType<A>(x: A) {
  return { ...x, 'Content-Type': 'application/json' }
}

export function mapResponse(
  response: Response,
  mapper = (response: Response) => {
    return response.text().then(console.log)
  },
) {
  if (response.ok) {
    return mapper(response).then(x => new Right<HTTPRequestError, any>(x))
  }

  throw new HTTPRequestError(response)
}

export const mapError = (e: HTTPRequestError) => {
  logError(e)
  return new Left<HTTPRequestError, any>(e)
}
