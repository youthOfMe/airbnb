import PropTypes from 'prop-types'
import React, { memo, useState, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const RoomItem = memo((props) => {
    const { itemData, itemWidth = '25%', itemClick } = props
    const [ selectIndex, setSelectIndex ] = useState(0)
    const sliderRef = useRef()

    // 点击组件时间处理逻辑
    function controlClickHandle(isRight = true, event) {
        
    }

    // 单图片展示
    const puctureElement = (
        <div className="cover">
            <img src={itemData.picture_url} alt='' />
        </div>
    )

    const sliderElement = (
        <div className="swiper">
            <div className="control">
                <div className="btn left" onClick={e => controlClickHandle(false, e)}>
                    <IconArrowLeft width="30" height="30"></IconArrowLeft>
                </div>
                <div className="btn right" onClick={e => controlClickHandle(true, e)}>
                    <IconArrowRight width="30" height="30"></IconArrowRight>
                </div>
            </div>
            <div className="indicator">
                
            </div>
            {/* 走马灯组件 */}
            <Carousel dot={false} ref={sliderRef}>
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className="cover" key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
        
    )

    return (
        // 设置为服务器传递过来的字体颜色
        <ItemWrapper verifyColor={itemData.verify_info.text_color || '#39576a'} itemWidth={itemWidth}>
            <div className="inner">
                <div className="cover">
                    <img src={itemData.picture_url} alt='' />
                </div>
                <div className="desc">
                    {itemData.verify_info.messages.join('.')}
                </div>
                <div className="name">
                    {itemData.name}
                </div>
                <div className="price">
                    ￥{itemData.price} / 晚
                </div>
                <div className="bottom">
                    <Rating readOnly value={itemData.star_rating || 4.5} precision={0.1} sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}></Rating>
                    <span className="count">{itemData.reviews_count}</span>
                    { itemData?.bottom_info?.content && <span className="extra">{itemData.bottom_info.content}</span> }
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem