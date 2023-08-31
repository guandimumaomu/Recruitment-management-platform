import { createRouter, createWebHashHistory } from "vue-router";
export const routes = [
    {
        path: '/',
        component: () => import('@/views/dashboard.vue') ,//懒加载
        meta: {
            label: '数据可视化',
            icon: 'AreaChartOutlined'
        }
    },

    {
        path: '/category',
        component: () => import('@/views/category/index.vue'),
        meta: {
            label: "分类管理",
            icon: 'AreaChartOutlined' 
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
        ]
    }

   
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router