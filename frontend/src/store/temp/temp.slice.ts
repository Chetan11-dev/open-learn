import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JSObject } from 'src/services/types/types'

type ReducerState = {}

const initialState: ReducerState = {}

const reducer = createSlice({
    name: 'ENTER_REDUCER_NAME_HERE',
    initialState,
    reducers: {
        doThat: (state, action: PayloadAction<{}>) => {
            throw new Error('Method not implemented.')
        },
    },
})

export const { doThat } = reducer.actions

export const selectState = (state: JSObject) => {
    throw new Error('Method not implemented.')
}

export default reducer.reducer
