import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination'

const EntirePagination = memo(() => {
    const { totalCount, currentPage, roomList } = useSelector(state => ({
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList
    }), shallowEqual)
    const totalPage = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20

    // 事件处理逻辑
    const dispatch = useDispatch()
    function pageChangeHandle(event, pageCount) {
        window.scrollTo(0, 0)
        // 更新最新的页码: redux => currentPage
        dispatch(fetchRoomListAction(pageCount - 1))
    }

    return (
        <PaginationWrapper>
            {
                // 使用双!防止展示0
                !!roomList.length && (
                    <div className="info">
                        <Pagination count={totalPage} onChange={pageChangeHandle}></Pagination>
                        <div className="desc">
                            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
                        </div>
                    </div>
                )
            }
        </PaginationWrapper>
    )
})

export default EntirePagination