import classNames from 'classnames'
import _ from 'lodash'
import { createContext, FC, useContext, useState } from 'react'
import { closest, onNextTick } from '../../../../utils/browser/browser'
import { PlaceholderBoxRect, createTranslateValue, WithPlaceholderBoxRect } from '../../../../utils/dnd/dnd'
import { useEventlistner } from '../../../../utils/hooks/hooks'
import { Axis, WithPlaceholder } from '../../../../utils/types/types'

const DATA_DROPPABLE_ID = 'data-droppable'
export const DATA_DROPPABLE = { [DATA_DROPPABLE_ID]: true }
const isDroppable = (el: HTMLElement): boolean => {
  return !!el.getAttribute(DATA_DROPPABLE_ID)
}
export type DndPlaceholderState = Omit<PlaceholderBoxRect, 'height'>

export const DndPlaceholderContext = createContext<{
  updatePosition: (r: DndPlaceholderState) => void
  hide: () => void
}>(undefined as any)
const initialState: DndPlaceholderState = { left: 0, top: 0, width: 0 }

const DndPlaceholderProvider: FC = ({ children }) => {
  const [state, setstate] = useState<DndPlaceholderState>(initialState)
  const [isHidden, setisHidden] = useState(true)

  useEventlistner('dragover', (e) => {
    if (!closest(e.target as any, isDroppable)) {
      setisHidden(true)
    }
  })
  return (
    <DndPlaceholderContext.Provider
      value={{
        hide: () => {
          setisHidden(true)
          // move after we have hidden to avoid showing move transition of element
          setTimeout(() => {
            setstate(initialState)
          }, 200)
        },
        updatePosition: (u) => {
          setisHidden(false)

          if (!_.isEqual(u, state)) {
            setstate(u)
          }
        },
      }}
    >
      <div
        style={{
          width: state.width,
          transform: createTranslateValue(state.left, state.top),
          opacity: isHidden ? 0 : 1,
        }}
        className={classNames('dnd-placeholder h-2 bg-success')}
      />

      {children}
    </DndPlaceholderContext.Provider>
  )
}

export default DndPlaceholderProvider
