import hyRequest, {
    getHomeGoodPriceData,
    getHomeDiscountData,
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch, getState }) => {
    const state = getState()
    
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
})

const homeSlice = createSlice({
    // 发起网络请求
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        discountInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        }
    }
})

export const { 
    changeGoodPriceInfoAction,
    changeDiscountInfoAction,
 } = homeSlice.actions

export default homeSlice.reducer