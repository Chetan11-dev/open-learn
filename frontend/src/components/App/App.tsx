import { FC } from 'react'
import { Provider } from 'react-redux'
import 'src/assets/styles/tailwind.css'
import Backend from 'src/services/backend/backend'
import getBackend from 'src/services/backend/get-backend'
import { handleServerError } from 'src/services/backend/handle-server-error'
import store from 'src/store'
import Home from '../Home/Home'

const App: FC = () => {
    const backend = getBackend()
    backend.findCoursesByKeyword('data s').then((c) => c.cata(handleServerError, (x) => alert(JSON.stringify(x))))
    return (
        <>
            <Provider store={store}>
                <Home />
            </Provider>
        </>
    )
}
export default App
