import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'

const HomeSectionV2 = memo((props) => {
    // 从props中获取数据
    const { infoData } = props

    // 定义内部的state
    const initialName = Object.keys(infoData.dest_list)[0]
    const [ name, setName ] = useState(initialName)
    const tabSNames = infoData.dest_address?.map(item => item.name)

    // 时间处理函数
    const tabClickHandle = useCallback(function tabClickHandle(index, name) {
        setName(name)
    }, [])

    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
            {/* <SectionTabs ></SectionTabs> */}
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {}

export default HomeSectionV2