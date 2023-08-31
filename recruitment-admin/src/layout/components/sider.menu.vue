<template>
    <div>
        <a-menu  theme="dark" mode="inline">
            <template v-for="item in routes">
                <a-menu-item v-if="!item.children"  :key="item.path">
                    <pie-chart-outlined />
                    <span>{{ item.meta.label }}</span>
                 </a-menu-item>
        
                <a-sub-menu v-else :key="item.path + '0'">
                    <template #title>
                        <span>
                            <user-outlined />
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

</script>

<style scoped>

</style>