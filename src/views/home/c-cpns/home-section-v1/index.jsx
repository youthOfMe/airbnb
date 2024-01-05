import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
    const { infoData } = props

    return (
        <SectionV1Wrapper>
            <div className="good-price">
                <SectionHeader title={infoData.title}></SectionHeader>
                <SectionRooms roomList={infoData.list} itemWidth='25%'></SectionRooms>
                <SectionFooter></SectionFooter>
            </div>
        </SectionV1Wrapper>
    )
})

HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV1