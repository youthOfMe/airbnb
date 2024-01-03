import { configureStore } from "@reduxjs/toolkit"
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
    reducer: {
        hone: homeReducer,
        entire: entireReducer
    }
})

export default store