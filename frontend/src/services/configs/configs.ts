import { Unimplemented } from '../errors/errors'

export const getBackendApiUrl = () => {
    if (__DEV__) {
        return 'http://localhost:8000'
    }
    return 'https://open-learn-api.com'
}

export const getAuthConfig = () => {
    throw Unimplemented
}
