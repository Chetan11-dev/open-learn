import { FC } from 'react'
import 'src/assets/styles/tailwind.css'
import Backend from 'src/services/backend/backend'
import { handleServerError } from 'src/services/backend/handle-server-error'
import Home from '../Home/Home'

const App: FC = () => {
    const backend = new Backend()
    backend.findCoursesByKeyword('data s').then((c) => c.cata(handleServerError, console.log))
    return (
        <>
            <Home />
        </>
    )
}
export default App
