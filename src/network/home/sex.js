import {request} from '../request'

export function getBanners(){
    return request({
        url:'/banner'
    })
}
//获取推荐歌单
export function getTuijians(limit=12){
    return request({
        url:'/personalized',
        params:{
            limit
        }
    })
}
//推荐新音乐
export function getNewSoons(){
    return request({
        url:'/personalized/newsong'
    })
}