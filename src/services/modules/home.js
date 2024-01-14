import hyRequest from "..";

export function getHomeGoodPriceData() {
    return hyRequest.get({
        url: '/home/goodprice'
    })
}

export function getHomeDiscountData() {
    return hyRequest.get({
        url: '/home/discount'
    })
}
