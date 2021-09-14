import { useDispatch, useSelector } from 'react-redux'
import { selectCourse } from '../../../../store/course/course.slice'

const Items = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <div>What will students learn in your course?</div>
      <div>
        You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing
        your course.
      </div>
    </div>
  )
}

const Objective = () => {
  const dispatch = useDispatch()
  const { objectives } = useSelector(selectCourse)
  return (
    <div>
      <div>What will students learn in your course?</div>
      <div>
        You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing
        your course.
      </div>
    </div>
  )
}
export default Objective
