import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: 'USERNAME',
    ranking: 'RANKING_LEVEL',
    value: 0
}

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        USERNAME: (state, action) => {
            state.username = action.payload
        },
        RANKING: (state, action) => {
            state.ranking = action.payload
        },
        INC: (state) => {
            state.value = state.value + 1;
        },
        DEC: (state) => {
            if(state.value > 0) {
                state.value = state.value - 1;
            }
        }
    }
})

export const { USERNAME, RANKING, INC, DEC } = FormSlice.actions
export default FormSlice.reducer