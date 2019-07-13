import axios from 'axios'
import store from './store'
import { prependListener } from 'cluster';
import { promised } from 'q';

const servie = axios.create({
    baseURL : '',    //服务器地址
    timeout :3000   //请求超时间
})

//请求拦截器
servie.interceptors.request.use(
    config=>{
        //这里处理请求头  比如token什么的
        return config
    },
    error=>{
        console.log(error)
        return Promise.reject(error)
    }
)
//  响应拦截器

servie.interceptors.response.use(
    response=>{
        //处理成功之后回调
        const res = response.data
     
        if (condition) {
            
            return Promise.reject(res.msg || '姬你太美')
        }else{
            return response
        }
    },
    error=>{
        return Promise.reject(error)
    }
)