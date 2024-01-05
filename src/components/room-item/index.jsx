import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
    const { itemData, itemWidth = '25%' } = props

    return (
        // 设置为服务器传递过来的字体颜色
        <ItemWrapper verifyColor={itemData.verify_info.text_color || '#39576a'} itemWidth={itemWidth}>
            <div className="inner">
                <div className="cover">
                    
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem