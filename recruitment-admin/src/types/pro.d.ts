//将一些跨模块需要用到的类型接口独立管理在里面，方便复用

export interface CategoryType{
    objectId?: string
    name: string
    parentId:string
    icon: string //icon图标链接
}