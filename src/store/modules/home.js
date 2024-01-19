import hyRequest, {
    getHomeGoodPriceData,
    getHomeHighScoreData,
    getHomeDiscountData,
    getHomeHotrecommendData,
    getHomePlusData,
    getHomeLongforData,
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch, getState }) => {
    const state = getState()
    
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotrecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res))
    })
})

const homeSlice = createSlice({
    // 发起网络请求
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
        }
    }
})

export const { 
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction,
 } = homeSlice.actions

export default homeSlice.reducer