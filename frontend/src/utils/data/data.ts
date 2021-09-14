import { JSObject } from '../types/types'

export function findById<A extends { id: string | number }>(xs: A[], id: string | number): A {
  return xs.find((x) => x.id === id)!
}

export function updatePartially(state: JSObject, payload: JSObject) {
  Object.entries(payload).forEach(([k, v]) => {
    // eslint-disable-next-line no-param-reassign
    state[k] = v
  })
}
