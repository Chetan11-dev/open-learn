import { DropTargetMonitor, XYCoord } from 'react-dnd'
import { isLastChild } from '../nodes/nodes'
import { NodeType } from '../nodes/types'
import { TopBottom, LeftRight } from '../types/types'

export type Rect = {
  left: number
  right: number
  top: number
  bottom: number
}
export type PlaceholderBoxRect = {
  top: number
  left: number
  width: number
  height: number
}
export type WithPlaceholderBoxRect = {
  rect: PlaceholderBoxRect
}

// eslint-disable-next-line import/no-mutable-exports
export let getOffset = (m: DropTargetMonitor) => {
  return m.getClientOffset()!
}

export const setMockOffset = (coords: XYCoord) => {
  getOffset = () => coords
}

function isAboveRelative(y: number, centerY: number) {
  return y < centerY
}

function isLeftRelative(x: number, centerX: number) {
  return x < centerX
}

function findCenterY(rect: DOMRect) {
  return rect.top + rect.height / 2
}
function findCenterX(rect: DOMRect) {
  return rect.left + rect.width / 2
}

export function findSide(m: DropTargetMonitor, rect: DOMRect): TopBottom {
  const isAbove = isAboveRelative(getOffset(m).y, findCenterY(rect))
  return isAbove ? 'top' : 'bottom'
}

export function findSideHorizontally(m: DropTargetMonitor, rect: DOMRect): LeftRight {
  const isLeft = isLeftRelative(getOffset(m).x, findCenterX(rect))
  return isLeft ? 'left' : 'right'
}

export function createTranslateValue(left: number, top: number) {
  return `translate(${left}px,${top}px)`
}
function isPointerInIndentArea(m: DropTargetMonitor, indentWidth: number) {
  const { x } = getOffset(m)
  return x <= indentWidth
}
function callByLastChildNode<A>(
  nodes: NodeType[],
  id: string,
  { onLast, onNotLast }: { onLast: () => A; onNotLast: () => A }
) {
  if (isLastChild(nodes, id)) {
    return onLast()
  }
  return onNotLast()
}

export function callByPosition<A>(
  m: DropTargetMonitor,
  x: Element,
  indentWidth: number,
  {
    id,
    nodes,
    onTop,
    onBottom,
    onLastChildBottomIndentArea,
  }: { id: string; nodes: NodeType[]; onTop: () => A; onBottom: () => A; onLastChildBottomIndentArea: () => A }
) {
  const side = findSide(m, x.getBoundingClientRect())

  if (side === 'top') {
    return onTop()
  }

  if (isPointerInIndentArea(m, indentWidth)) {
    return callByLastChildNode(nodes, id, {
      onLast: onLastChildBottomIndentArea,
      onNotLast: onBottom,
    })
  }

  return onBottom()
}
export function callByVerticalPosition<A>(
  m: DropTargetMonitor,
  x: Element,
  { onTop, onBottom }: { onTop: () => A; onBottom: () => A }
) {
  const side = findSide(m, x.getBoundingClientRect())

  return side === 'top' ? onTop() : onBottom()
}

export function getTopPosition(side: TopBottom, top: number, height: number, pushUpBy?: number) {
  return side === 'top' ? top : top + (height - (pushUpBy ?? 0))
}

export function getBoxRect(side: TopBottom, { width, height, top, left }: DOMRect, lineHeight = 8): PlaceholderBoxRect {
  const topPosition = getTopPosition(side, top, height, lineHeight)
  return {
    left,
    top: topPosition,
    width,
    height: lineHeight,
  }
}

export function getBoxRectHorizontally(side: LeftRight, { width, height, top, left }: DOMRect): PlaceholderBoxRect {
  const lineWidth = 8
  const leftPlacement = side === 'left' ? left : left + (width - lineWidth)
  const result = {
    left: leftPlacement,
    top,
    width: lineWidth,
    height,
  }
  return result
}
export const TypeHeight = 16

export function typeFitsWhere(boxProps: PlaceholderBoxRect): TopBottom {
  return boxProps.top - TypeHeight <= 0 ? 'bottom' : 'top'
}
