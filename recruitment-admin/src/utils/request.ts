//对axios函数进行二次封装

/*
目的1：利用axios请求、响应拦截器功能
目的2：请求拦截器，一般可以在请求头中携带公共的参数：token
目的3：响应拦截器，可以简化服务器返回的数据，处理http网络错误
*/
import axios from "axios"

const instance = axios.create({
  //请求的基础路径
  baseURL: 'https://brrxzper.lc-cn-e1-shared.com/1.1/',
  //超时的设置，请求超过5s就失败
  timeout:5000, 
    headers: {
    'X-LC-Id': 'bRrXZpErmstSfa9is8ier6Qb-9Nh9j0Va',
    'X-LC-Key': 'TrRlG3bYPyqf9VNfA5mFPvUU',
    'Content-Type': 'application/json',
  }
})

export default instance