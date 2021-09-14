import './global'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import store from '../store'
import CourseEditor from '../pages/CourseEditor/CourseEditor'

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <CourseEditor />
      </Provider>
    </>
  )
}
export default App
