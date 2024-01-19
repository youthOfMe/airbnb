import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})
