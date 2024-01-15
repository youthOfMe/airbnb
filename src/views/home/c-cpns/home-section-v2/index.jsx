import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    // 从props中获取数据
    const { infoData } = props

    // 定义内部的state
    const initialName = Object.keys(infoData.dest_list)[0]
    const [ name, setName ] = useState(initialName)
    const tabNames = infoData.dest_address?.map(item => item.name)

    // 事件处理函数
    const tabClickHandle = useCallback(function tabClickHandle(index, name) {
        setName(name)
    }, [])

    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth='33.33%'></SectionRooms>
            <SectionFooter name={name}></SectionFooter>
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {}

export default HomeSectionV2