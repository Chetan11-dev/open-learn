import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { CourseInterface } from '../../utils/backend/interfaces'
import { findById, getUniqueId, updatePartially } from '../../utils/data/data'
import { JSObject, WithId } from '../../utils/types/types'

const initialState: CourseInterface = {
  averageRating: 0,
  updatedAt: '',
  createdAt: '',
  requirements: [],
  objectives: [
    { id: 'objective-1', text: '' },
    { id: 'objective-2', text: '' },
    { id: 'objective-3', text: '' },
    { id: 'objective-4', text: '' },
  ],
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

function converToSingular(key: string): string {
  return _.trimEnd(key, 's')
}

const reducer = createSlice({
  name: 'course',
  initialState,
  reducers: {
    updateCourse: (state, { payload }: PayloadAction<Partial<CourseInterface>>) => {
      updatePartially(state, payload)
    },

    deleteIntendedLearnersItem: (
      state,
      { payload: { id, key } }: PayloadAction<WithId & { key: 'objectives' | 'requirements' | 'targetAudiences' }>
    ) => {
      _.remove(state[key], { id })
    },
    updateIntendedLearnersItem: (
      state,
      {
        payload: { id, key, text },
      }: PayloadAction<WithId & { key: 'objectives' | 'requirements' | 'targetAudiences'; text: string }>
    ) => {
      findById(state[key], id).text = text
    },
    createNewIntendedLearnersItem: (
      state,
      { payload: key }: PayloadAction<'objectives' | 'requirements' | 'targetAudiences'>
    ) => {
      state[key].push({ id: getUniqueId(state[key], _.kebabCase(converToSingular(key))), text: '' })
    },
  },
})

export const {
  updateCourse,
  createNewIntendedLearnersItem,
  deleteIntendedLearnersItem,
  updateIntendedLearnersItem,
} = reducer.actions

export const selectCourse = (state: JSObject): CourseInterface => state.course

export default reducer.reducer
