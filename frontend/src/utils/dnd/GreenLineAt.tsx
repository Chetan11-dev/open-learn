import classNames from 'classnames'
import { Axis } from '../types/types'
import { WithPlaceholderBoxRect, createTranslateValue } from './dnd'

export default function GreenLineAt({
  rect: { width, height, left, top },
  axis = 'horizontal',
}: WithPlaceholderBoxRect & { axis?: Axis }) {
  return (
    <div
      style={{
        width,
        height,
        transform: createTranslateValue(left, top),
      }}
      className={classNames('dnd-placeholder', axis === 'horizontal' ? 'px-2' : 'py-2')}
    >
      <div className="h-full rounded-full bg-green" />
    </div>
  )
}
