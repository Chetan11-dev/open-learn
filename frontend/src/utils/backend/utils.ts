import { getBackendApiUrl } from '../configs/configs'
import { logError } from '../errors/errors'

import { Either, Right, Left } from './Either'
import { NotFoundCode } from './error-codes'
import HTTPRequestError from './HTTPRequestError'

export const isNotFoundErrorCode = (r: Either<number, null> | Either<number, any>) =>
  r.isLeft() && r.left() === NotFoundCode

export const getEndpoint = (path: string) => `${getBackendApiUrl()}/${path}`

export function withJsonContentType<A>(x: A) {
  return { ...x, 'Content-Type': 'application/json' }
}

export function mapResponse(
  response: Response,
  mapper = (res: Response) => {
    return res.json()
  }
) {
  if (response.ok) {
    return mapper(response).then((x) => new Right<HTTPRequestError, any>(x))
  }

  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw new HTTPRequestError(response)
}

export const mapError = (e: HTTPRequestError) => {
  logError(e)
  return new Left<HTTPRequestError, any>(e)
}
