import request from  './utils/request'

//获取轮播图
const api ={}

// 获取首页轮播图
api.getBannerHome=function(){
    return request({
        url:"/ls/view/getBannersByHome",
        method:'get',
        // query:query
        // data
    })
}


// 获取产品轮播图
api.getBannersByProduct=function(){
    return request({
        url:"/ls/view/getBannersByProduct",
        method:'get',
        // query:query
        // data
    })
}

// 获取首页信息
api.getHomeView=function(){
    return request({
        url:"/ls/view/getBusinessPartmer",
        method:'get',
        // query:query
        // data
    })
}

// 获取招聘信息
api.getPJobContent=function(){
    return request({
        url:"/ls/view/getPJobContent",
        method:'get',
        // query:query
        // data
    })
}

// 根据产品类别获取产品
api.getProductList=function(params){
    return request({
        url:"/ls/view/getProductList",
        method:'get',
        params
        // query:query
        // data
    })
}

// 获取分类
api.getClassifyList=function(){
    return request({
        url:"/ls/view/getClassifyList",
        method:'get',
        // query:query
        // data
    })
}



// 商品详情接口
api.getProductById=function(params){
    return request({
        url:"/ls/view/getProductById",
        method:'get',
        params
        // query:query
        // data
    })
}




export default api