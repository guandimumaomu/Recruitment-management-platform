<template>
    <div>
        <a-menu  theme="dark" mode="inline" @click="handleMenu">
            <template v-for="item in routes[0].children">
                <a-menu-item v-if="!item.children"  :key="item.path">
                    <component :is="item.meta.icon" />
                    <span>{{ item.meta.label }}</span>
                 </a-menu-item>
        
                <a-sub-menu v-else :key="item.path + '0'">
                    <template #title>
                        <span>
                            <component :is="item.meta.icon" />
                            <span>{{ item.meta.label }}</span>
                        </span>
                    </template>
                    <a-menu-item v-for="child in item.children" :key="child.path">
                        {{ child.meta.label }}
                    </a-menu-item>
                </a-sub-menu>
            </template>

        </a-menu>
    </div>
</template>

<script setup lang="ts">
import { routes } from '@/router'
import {useRouter} from 'vue-router'
const router = useRouter()
/*useRouter(): Router
返回路由器实例。相当于在模板中使用 $router。
返回值:Router
*/
const handleMenu = ({key}:{key:string}) => {
    router.push(key)    
}

</script>

<style scoped>

</style>