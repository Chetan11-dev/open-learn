import Backend from './backend'
import BackendMock from './BackendMock'

export default function getBackend() {
    if (__DEV__) {
        return new BackendMock()
    }
    return new Backend()
}
