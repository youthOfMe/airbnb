import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'

const HomeLongfor = memo((props) => {
    const { infoData } = props

    return (
        <LongforWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
            <div className="longfor-list">
                <ScrollView>
                    {
                        infoData.list.map(item => {
                            return <LongforItem itemData={item} key={item.city}></LongforItem>
                        })
                    }
                </ScrollView>
            </div>
        </LongforWrapper>
    )
})

export default HomeLongfor