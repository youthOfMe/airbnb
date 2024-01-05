import hyRequest, {
    getHomeGoodPriceData
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch, getState }) => {
    const state = getState()
    
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
})

const homeSlice = createSlice({
    // 发起网络请求
    name: 'home',
    initialState: {
        goodPriceInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        }
    }
})

export const { 
    changeGoodPriceInfoAction
 } = homeSlice.actions

export default homeSlice.reducer