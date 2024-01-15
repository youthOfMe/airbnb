import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import { ClassNames } from '@emotion/react'

const SectionTabs = memo((props) => {
    const { tabNames = [], tabClick } = props
    const { currentIndex, setCurrentIndex } = useState(0)

    function itemClickHandle(index, item) {
        setCurrentIndex(index)
        tabClick(index, item)
    }

    return (
        <TabsWrapper>
            <ScrollView>
                {
                    tabNames.map((item, index) => {
                        return (
                            <div
                                key={item}
                                className={ClassNames('item', { active: index === currentIndex })}
                                onClick={e => itemClickHandle(index, item)}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTabs