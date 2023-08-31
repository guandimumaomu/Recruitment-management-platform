import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component:() => import('@/views/dashboard.vue') //懒加载
        },

        {
            path: '/category/list',
            component:() => import('@/views/category/list.vue') //懒加载
        },

        {
            path: '/category/pub',
            component:() => import('@/views/category/pub.vue') //懒加载
        },
    ],
})

export default router