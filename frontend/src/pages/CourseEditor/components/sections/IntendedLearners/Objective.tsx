import classNames from 'classnames'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import {
  createNewIntendedLearnersItem,
  deleteIntendedLearnersItem,
  selectCourse,
  updateCourse,
  updateIntendedLearnersItem,
} from '../../../../../store/course/course.slice'
import { inputValue } from '../../../../../utils/browser/browser'
import { getUniqueId } from '../../../../../utils/data/data'
import { deleteNodeReducer } from '../../../../../utils/nodes/nodes'
import { VandC } from '../../../../../utils/types/types'

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
          <Item
            key={id}
            value={text}
            canDelete={objectives.length > MIN_OBJECTIVES}
            handleDelete={() => dispatch(deleteIntendedLearnersItem({ key, id }))}
            onChange={(u) => dispatch(updateIntendedLearnersItem({ key, id, text: u }))}
          />
        ))}
        <button onClick={() => dispatch(createNewIntendedLearnersItem(key))}>Add</button>
      </div>
    </div>
  )
}
export default Objective
