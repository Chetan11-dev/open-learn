/* eslint-disable no-console */
import fp from 'lodash/fp'
import { Func1 } from 'redux'
import _ from 'lodash'
import { JSObject, WithId } from '../types/types'
import { TimestampsInterface } from '../backend/interfaces'

export function isListEmpty(param: any[]) {
  if (!param || param.length === 0) {
    return true
  }
  return false
}

export const isListNotEmpty = _.negate(isListEmpty)

export function isEmptyString<A>(p: A) {
  if (typeof p !== 'string' || p.trim().length === 0) {
    return true
  }
  return false
}
export const isStringLength0 = (x: string) => x === ''
export const isNotEmptyString = _.negate(isEmptyString)
export const getIsNotFilter = (...xs: any[]) => {
  return _.negate(_.overSome(...xs.map((x) => fp.isEqual(x))))
}
export const stringifyAndParse = _.flow(JSON.stringify, JSON.parse)

export const removeWhiteSpaces = fp.replace(/\s/g, '')

//  { a: 1, b: undefined, c: 3 } => { a: 1, c: 3 }
export function removeNullOrUndefined<A extends JSObject>(a: A) {
  return _.omitBy(a, _.overSome(_.isNull, _.isUndefined)) as A
}

export function isEveryEqual(objects: any[]) {
  return _.uniqWith(objects, _.isEqual).length === 1
}

export const isNotNull = _.negate(_.isNull)

export const areAllValueNull = (x: JSObject) => _.values(x).every(_.isNull)

export function mapId<A extends { id: string }>(xs: A[]): string[] {
  return xs.map((x) => x.id)
}

export function suffix(x: string | number, sfx: string) {
  return `${x}${sfx}`
}
export function prefix(x: string | number, pfx: string) {
  return `${pfx}${x}`
}

export function findById<A extends { id: string | number }>(xs: A[], id: string | number): A {
  return xs.find((x) => x.id === id)!
}

export function findByType<A extends { type: string }>(xs: A[], id: A['type']): A {
  return xs.find((x) => x.type === id)!
}

export function hasSomeWithId<A extends { id: string | number }>(xs: A[], id: string | number): boolean {
  return xs.some((x) => x.id === id)
}

export function findByMongooseId<A extends { _id: string }>(xs: A[], id: string): A {
  return xs.find((x) => x._id.toString() === id)!
}

export function hasSomeById<A extends { id: string }>(xs: A[], id: string) {
  return xs.some((x) => x.id === id)
}

export function hasSomeByMongooseId<A extends { _id: string }>(xs: A[], id: string) {
  return xs.some((x) => x._id.toString() === id)
}
export function mapIf<A, B>(f: (a: A) => boolean, map: Func1<A, B>) {
  return (a: A) => (f(a) ? map(a) : a)
}
export const negateBoolean = (x: boolean) => !x

export const mapStrToStartUpperCase = _.flow(_.startCase, _.upperCase)

export function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here")
}

export function updatePartially(state: JSObject, payload: JSObject) {
  Object.entries(payload).forEach(([k, v]) => {
    // eslint-disable-next-line no-param-reassign
    state[k] = v
  })
}

export const mergeObjects = (xs: JSObject[]) => Object.assign({}, ...xs)
export const deleteTillDash = (x: string) => x.replace(/.*-/, '')
export function silenceerror<A>(f: () => A): A {
  const e = console.error
  console.error = () => {}
  const r = f()
  console.error = e
  return r
}
export function readNumber(v: any) {
  if (v === '' || (typeof v !== 'number' && typeof v !== 'string')) {
    return null
  }
  const n = Number(v)
  return Number.isNaN(n) ? null : n
}

export function getUniqueId<T extends WithId>(ls: T[], type: string) {
  const isPositive = (x: number) => x >= 0
  const xs = ls
    .filter((x) => x.id.split('-').length === 2)
    .filter((x) => x.id.split('-')[0] === type)
    .map((x) => readNumber(x.id.split('-')[1]))
    .filter(_.overEvery(isNotNull, isPositive as any))
    .map((x) => Math.floor(x!))

  return xs.length ? `${type}-${_.max(xs)! + 1}` : `${type}-${1}`
}

export const isTextContainSearchText = (text: string, searchText: string) => text.indexOf(searchText) > -1

export function sortByMostRecentUpdate<A extends TimestampsInterface>(s: A[]): A[] {
  const r = _.orderBy(s, [(obj) => new Date(obj.updatedAt)], ['desc'])
  return r
}
