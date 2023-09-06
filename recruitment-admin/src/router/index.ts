import { createRouter, createWebHashHistory } from "vue-router";
export const routes = [


    {
        path: '/',
        component: () => import('@/layout/index.vue') ,//懒加载
        children: [
            {
                path: '/',
                component: () => import('@/views/dashboard.vue') ,//懒加载
                meta: {
                    label: '数据可视化',
                    icon: 'DashboardTwoTone'
                }
            },
        
            {
                path: '/category',
                component: () => import('@/views/category/index.vue'),
                meta: {
                    label: "分类管理",
                    icon: 'AppstoreTwoTone' 
                },
                children: [
                    {
                        path: '/category/list',
                        component: () => import('@/views/category/list.vue'), //懒加载
                        meta: {
                            label: "分类列表",
                        },
                    },
                
                    {
                        path: '/category/pub',
                        component:() => import('@/views/category/pub.vue') ,//懒加载
                        meta: {
                            label: "发布分类",
                        },
                    },

                    {
                        path: '/category/edit',
                        component:() => import('@/views/category/edit.vue') ,//懒加载
                        meta: {
                            label: "编辑分类",
                            hidden:true //侧边栏隐藏
                        },
                    },
                ]
            }
        
        ]
    },

    
    {
        path: '/login',
        component: () => import('@/views/login.vue') ,//懒加载
    },
  
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router