import { FC } from 'react'
import { Provider } from 'react-redux'
import 'src/assets/styles/tailwind.css'
import Backend from 'src/services/backend/backend'
import getBackend from 'src/services/backend/get-backend'
import { handleServerError } from 'src/services/backend/handle-server-error'
import store from 'src/store'
import Home from '../Home/Home'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
