export type WithId = {
  id: string
}
export type WithOnChange<T = string> = {
  onChange: (value: T) => void
}

export type WithValue<T = string> = {
  value: T
}

//  WithValue & WithOnChange
export type VandC<A = string> = WithValue<A> & WithOnChange<A>

export type WithPlaceholder = {
  placeholder?: string
}

export type JSObject<T = any> = Record<string, T>
export type VoidFn = () => void
export type WithOnClose<T = void> = { onClose: (x: T) => void }
export type WithOnDelete<T = void> = { onDelete: () => T }
export type TopBottom = 'top' | 'bottom'
export type LeftRight = 'left' | 'right'
export type Axis = 'vertical' | 'horizontal'

export type Undefinable<T = string> = undefined | T
export type Validator<A> = (a: A) => boolean
export type Nullable<A> = null | A
