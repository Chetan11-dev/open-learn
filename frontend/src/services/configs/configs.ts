import BackendMock from '../backend/BackendMock'

export const getServerUrl = () => {
  return 'http://localhost:8000'
}

export const getBackend = () => {
  return new BackendMock()
}
