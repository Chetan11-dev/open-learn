import classNames from 'classnames'
import _ from 'lodash'
import { PropsWithChildren, useContext, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import {
  createNewIntendedLearnersItem,
  deleteIntendedLearnersItem,
  moveIntendedLearnersItem,
  selectCourse,
  updateIntendedLearnersItem,
} from '../../../../../store/course/course.slice'
import { getRect, inputValue } from '../../../../../utils/browser/browser'
import { findSide, getBoxRect } from '../../../../../utils/dnd/dnd'
import { VandC, WithId } from '../../../../../utils/types/types'
import { DATA_DROPPABLE, DndPlaceholderContext } from '../../DndPlaceholder/DndPlaceholder'

function Item({
  onChange,
  value,
  handleDelete,
  canDelete,
}: VandC & { canDelete: boolean; handleDelete: VoidFunction }) {
  return (
    <div className="flex">
      <input type="text" value={value} onChange={_.flow(inputValue, onChange)} />
      <button
        className={classNames(!canDelete && 'cursor-not-allowed')}
        onClick={() => {
          if (canDelete) {
            handleDelete()
          }
        }}
      >
        Delete
      </button>
      <button className="cursor-move">Reorder</button>
    </div>
  )
}

function DragDropItem({ id, children }: PropsWithChildren<WithId>) {
  const ref = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const { updatePosition, hide } = useContext(DndPlaceholderContext)

  const [, drag] = useDrag({
    type: 'objectives',
    end: hide,
    item: () => ({ id }),
  })

  const [, drop] = useDrop({
    accept: 'objectives',
    drop: (item: WithId, m) => {
      const side = findSide(m, getRect(ref.current!))
      dispatch(moveIntendedLearnersItem({ src: item.id, target: id, key: 'objectives', side }))
    },
    hover: (__, m) => {
      const side = findSide(m, getRect(ref.current!))
      updatePosition(getBoxRect(side, getRect(ref.current!)))
    },
  })

  drag(drop(ref))

  return (
    <div ref={ref} {...DATA_DROPPABLE}>
      {children}
    </div>
  )
}

const MIN_OBJECTIVES = 4

const Objective = () => {
  const dispatch = useDispatch()
  const key = 'objectives'
  const objectives = useSelector(selectCourse)[key]

  return (
    <div>
      <div>What will students learn in your course?</div>
      <div>
        You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing
        your course.
      </div>
      <div className="space-y-2">
        {objectives.map(({ id, text }, i) => (
          <DragDropItem id={id}>
            <Item
              key={id}
              value={text}
              canDelete={objectives.length > MIN_OBJECTIVES}
              handleDelete={() => dispatch(deleteIntendedLearnersItem({ key, id }))}
              onChange={(u) => dispatch(updateIntendedLearnersItem({ key, id, text: u }))}
            />
          </DragDropItem>
        ))}
        <button onClick={() => dispatch(createNewIntendedLearnersItem(key))}>Add</button>
      </div>
    </div>
  )
}
export default Objective
