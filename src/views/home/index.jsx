import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'

const Home = memo(() => {
    //  从redux中获取数据
    const {
        goodPriceInfo
    } = useSelector(state => ({
        goodPriceInfo: state.home.goodPriceInfo,
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
                { goodPriceInfo && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1> }
            </div>
        </HomeWrapper>
    )
})

export default Home