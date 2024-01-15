import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils'

// 进行封装
const Home = memo(() => {
    //  从redux中获取数据
    const {
        goodPriceInfo,
        highScoreInfo,
        discountInfo,
    } = useSelector(state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo
    }), shallowEqual)

    // 派发异步的事件 发送网络请求
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])

    return (
        <HomeWrapper>
            <HomeBanner></HomeBanner>
            <div className="content">
                { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2> }
                { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1> }
                { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1> }
            </div>
        </HomeWrapper>
    )
})

export default Home