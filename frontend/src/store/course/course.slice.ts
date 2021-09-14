import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourseInterface } from '../../utils/backend/interfaces'
import { updatePartially } from '../../utils/data/data'
import { JSObject } from '../../utils/types/types'

type ReducerState = {}

const initialState: CourseInterface = {
  averageRating: 0,
  updatedAt: '',
  createdAt: '',
  requirements: [],
  objectives: [],
  description: '',
  targetAudiences: [],
  curriculumItems: [],
  isPublished: false,
  isApproved: false,
  reviews: [],
  enrollmentsCount: 0,
  headline: '',
  reviewsCount: 0,
  teachers: [],
  thumbnailUrl: '',
  title: '',
  url: '',
}

const reducer = createSlice({
  name: 'course',
  initialState,
  reducers: {
    updateCourse: (state, { payload }: PayloadAction<Partial<CourseInterface>>) => {
      updatePartially(state, payload)
    },
  },
})

export const { updateCourse } = reducer.actions

export const selectCourse = (state: JSObject): CourseInterface => state.course

export default reducer.reducer
