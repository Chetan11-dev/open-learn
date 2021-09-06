import 'src/services/global'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { StrictMode } from 'react'

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
)
