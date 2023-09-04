import { CategoryType } from '@/types/pro'
import request from '@/utils/request'

//做具体业务相关的请求

export const testPost = () => {
    return request.post('classes/Test', {
        //通过表单组件获取用户相关数据，传递给相关API方法，再提交给后端
        name: '翠山',
        score:80,
    })
}

//实现分类发布接口
export const categoryPost = (category: CategoryType) => {
    return request.post("classes/category", category)
}