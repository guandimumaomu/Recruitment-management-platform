// 封装处理路由数据包的方法函数
import { routes } from "@/router"
import { RouteRecordRaw } from "vue-router"
interface RouteMapType{
    [key:string]:any
}
export function routeMapTool() {
    let routeMap:RouteMapType = {}
    //递归函数
    function loop(arr:RouteRecordRaw[]) {
        arr.forEach(item => {
            routeMap[item.path] = item.meta!.label
            if (item.children) {
                loop(item.children)
            }
        })
    }
    loop(routes)
    return routeMap
}