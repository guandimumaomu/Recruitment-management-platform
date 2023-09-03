<template>
<a-breadcrumb style="margin: 20px">
    <a-breadcrumb-item>首页</a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import {routeMapTool} from '@/utils/tools'

const route = useRoute()
const routeMap = routeMapTool()
console.log(routeMap)



watch(route, (newVal) => {
  console.log("路由变化了", newVal);
  
})

</script>

<style scoped>

</style>