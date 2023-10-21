import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../Features/Form/FormSlice'

export const store = configureStore({
    reducer: {
        form: formReducer
    }
})