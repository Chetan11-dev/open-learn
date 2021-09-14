import './global'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Home from '../pages/Home/Home'
import getBackend from '../utils/backend/get-backend'
import { handleServerError } from '../utils/backend/handle-server-error'
import store from '../store'

const App: FC = () => {
  const backend = getBackend()
  backend.findCoursesByKeyword('data s').then((c) => c.cata(handleServerError, (x) => alert(JSON.stringify(x))))
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <Home />
        </Provider>
      </DndProvider>
    </>
  )
}
export default App
