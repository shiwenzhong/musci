import {request} from '../request'

//获取歌单详情
export function getMusicDetail(id){
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}
//获取歌单详情动态
export function getMusicDetailD(id){
    return request({
        url:'/playlist/detail/dynamic',
        params:{
            id
        }
    })
}
//获取音乐列表
export function getMusicList(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}
//获取音乐链接
export function getMusicUrl(id){
    return request({
        url:'/song/url',
        params:{
            id
        }
    })
}
//获取音乐歌词
export function getMusicWord(id){
    return request({
        url:'/lyric',
        params:{
            id
        }
    })
}

