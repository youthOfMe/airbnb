import React, { memo, useDebugValue, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const Entire = memo(() => {
    // 发送网络请求 获取数据 并且保存当前页面
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRoomListAction())
    }, [dispatch])

    return (
        <EntireWrapper>
            <EntireFilter></EntireFilter>
            <EntireRooms></EntireRooms>
            <EntirePagination></EntirePagination>
        </EntireWrapper>
    )
})

export default Entire