import PropTypes from 'prop-types'
import React, { memo, useState, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
    const { itemData, itemWidth = '25%', itemClick } = props
    const [ selectIndex, setSelectIndex ] = useState(0)
    const sliderRef = useRef()

    // 点击组件事件处理逻辑
    // 事件处理的逻辑
    function controlClickHandle(isRight = true, event) {
        isRight ? sliderRef.current.next() : sliderRef.current.prev()

        // 最新的索引
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        const length = itemData.picture_urls.length
        if(newIndex < 0) newIndex = length - 1
        if(newIndex > length - 1) newIndex = 0
        setSelectIndex(newIndex)

        // 组织事件冒泡
        event.stopPropagation()
    }

    function itemClickHandle() {
        if(itemClick) itemClick(itemData) 
    }

    // 单图片展示
    const pictureElement = (
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
                <Indicator selectIndex={selectIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <span className={classNames("dot", { active: selectIndex === index })}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
            {/* 走马灯组件 */}
            <Carousel dots={false} ref={sliderRef}>
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
                { !itemData.picture_urls ? pictureElement : sliderElement }

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