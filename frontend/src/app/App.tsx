import './global'
import { FC } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { divide } from 'lodash'
import store from '../store'
import CourseEditor from '../pages/CourseEditor/CourseEditor'
import Rbd from '../pages/CourseEditor/components/rbd/Rbd'
import { selectCourse, updateCourse } from '../store/course/course.slice'

function RbdContainer() {
  const dispatch = useDispatch()
  const { objectives } = useSelector(selectCourse)

  return (
    <>
      <Rbd
        handleReorder={(u) => dispatch(updateCourse({ objectives: u }))}
        items={objectives}
        renderItem={(x) => <div>{x.text + x.id}</div>}
      />
    </>
  )
}

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <CourseEditor />
        <RbdContainer />
      </Provider>
    </>
  )
}
export default App
