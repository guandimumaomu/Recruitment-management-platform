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
    loop(routes[0].children!)
    //当你使用 ! 操作符时，你告诉 TypeScript 编译器：“我确定这个值不会为 null 或 undefined，所以可以安全地访问它的属性或调用它的方法。
    return routeMap
}