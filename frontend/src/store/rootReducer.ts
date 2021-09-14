import { combineReducers } from '@reduxjs/toolkit'
import courseReducer from './course/course.slice'

const rootReducer = combineReducers({
  course: courseReducer,
})

export default rootReducer
