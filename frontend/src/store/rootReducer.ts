import { combineReducers } from '@reduxjs/toolkit'
import tempReducer from './temp/temp.slice'

const rootReducer = combineReducers({
    temp: tempReducer,
})

export default rootReducer
