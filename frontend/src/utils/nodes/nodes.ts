/* eslint-disable no-param-reassign */
import _ from 'lodash'
import { __ } from 'lodash/fp'
import { Func1 } from 'redux'
import { findById, getIsNotFilter } from '../data/data'
import { UnreachableError } from '../errors/errors'
import { TopBottom, WithId } from '../types/types'
import { NodeType } from './types'

export function getAllBefore<A>(x: A, arr: A[]) {
  const i = arr.findIndex((a) => _.isEqual(a, x))
  return i > -1 ? arr.slice(0, i) : []
}

export function getAllAfter<A>(x: A, arr: A[]) {
  const i = arr.findIndex((a) => _.isEqual(a, x))
  return i > -1 ? arr.slice(i + 1) : []
}

export function computeAfterMoveChildren<A>(from: A, to: A, side: TopBottom, arr: A[]) {
  let r = _.cloneDeep(arr)
  const beforeEls = getAllBefore(to, r)
  const afterEls = getAllAfter(to, r)

  r = [...beforeEls, ...(side === 'top' ? [from] : []), to, ...(side === 'bottom' ? [from] : []), ...afterEls]
  return r
}

export function findParent<I extends NodeType, O = I & { children: string[] }>(nodes: I[], id: string): O {
  return nodes.find(({ children }) => {
    if (children) return children.includes(id)
    return false
  })! as never
}
export function findParentId(nodes: NodeType[], id: string) {
  return findParent(nodes, id).id
}

export function traverse(nodes: NodeType[], node: NodeType, cb: (x: NodeType) => void) {
  if (node.children) {
    node.children.forEach((c) => traverse(nodes, findById(nodes, c), cb))
  }
  cb(node)
}

export function isParentNode(nodes: NodeType[], id: string) {
  return !!findById(nodes, id).children
}
export function isLastChild(nodes: NodeType[], id: string) {
  return _.last(findParent(nodes, id).children) === id
}

export function collectIds(nodes: NodeType[], root: NodeType) {
  const ids: string[] = []
  traverse(nodes, root, ({ id }) => ids.push(id))
  return ids
}

export const findNextSibling = (nodes: NodeType[], id: string) => {
  const { children } = findParent(nodes, id)
  const nextSiblingId = children[_.clamp(children.indexOf(id) + 1, 0, children.length - 1)]
  return findById(nodes, nextSiblingId)
}

export const findNextSiblingId = (nodes: NodeType[], id: string) => {
  return findNextSibling(nodes, id).id
}

export const findPreviousSibling = (nodes: NodeType[], id: string) => {
  const { children } = findParent(nodes, id)
  const previousSiblingId = children[_.clamp(children.indexOf(id) - 1, 0, children.length - 1)]
  return findById(nodes, previousSiblingId)
}

export function deleteFromForItsParent<A extends NodeType>(nodes: A[], fromId: string) {
  const from = findById(nodes, fromId)
  // Remove fromId from it's parent and Point to new parent
  const fromParent = findParent(nodes, from.id)
  _.pull(fromParent.children, from.id)
}

export function performMove<A extends WithId>(
  nodes: A[],
  {
    src,
    target,
    side,
  }: {
    src: string
    target: string
    side: TopBottom
  }
) {
  const toParent = findParent(nodes, target)
  if (!toParent) throw UnreachableError
  const newChilds = computeAfterMoveChildren(src, target, side, toParent.children)
  if (!_.isEqual(toParent.children, newChilds)) {
    toParent.children = newChilds
  }
}

export function deleteNodeReducer<A extends { nodes: NodeType[] }>(state: A, { payload: id }: { payload: string }) {
  const child = findById(state.nodes, id)

  if (child.children) child.children.forEach((c) => deleteNodeReducer(state, { payload: c }))
  const parent = findParent(state.nodes, child.id)

  if (!parent) {
    throw UnreachableError
  }

  parent.children = parent.children.filter(getIsNotFilter(child.id))
  state.nodes = state.nodes.filter((node) => !__.isEqual(child.id, node.id))
}
