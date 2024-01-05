import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const { roomList = [], itemWidth } = props

    return (
        <RoomsWrapper>
            {
                roomList && roomList.slice(0, 8).map(item => {
                    return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}></RoomItem>
                })
            }
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {}

export default SectionRooms