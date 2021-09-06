import BackendMock from './BackendMock'

export default function getBackend() {
    return new BackendMock()
}
