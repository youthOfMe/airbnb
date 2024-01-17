import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
    const { itemData } = props

    return (
        <ItemWrapper>
            <div className="inner">
                <div className="item-info">
                    <img src={itemData.picture_url} alt="" className="cover" />
                    <div className="bg-cover"></div>
                    <div className="info">
                        <div className="city">
                            {itemData.city}
                        </div>
                        <div className="price">
                            均价 {itemData.price}
                        </div>
                    </div>
                </div>
            </div>
        </ItemWrapper>
    )
})

LongforItem.propTypes = {}

export default LongforItem