import { WithId } from '../types/types'

export type NodeType = WithId & {
  children?: string[]
}

export type ParentNodeType = WithId & {
  children: string[]
}
