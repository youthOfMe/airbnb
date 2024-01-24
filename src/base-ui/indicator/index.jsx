import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props
    const contentRef = useRef()

    useEffect(() => {
        // 1. 获取selectIndex对应的item
        const selectItemEl = contentRef.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft
        const itemWiidth = selectItemEl.clientWidth

        // 2. 获取content的宽度
        const contentWidth = contentRef.current.clientWidth
        const contentScroll = contentRef.current.scrollWidth

        // 3. 获取selectIndex要滚动的距离
        let distance = itemLeft + itemWiidth * 0.5 - contentRef * 0.5
        if (distance < 0) distance = 0 // 左边的特俗情况处理
        const totalDistance = contentScroll - contentWidth
        if (distance > totalDistance) distance = totalDistance // 右边的特俗情况处理

        contentRef.current.style.transform = `translate(${-distance})`
    })

    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator