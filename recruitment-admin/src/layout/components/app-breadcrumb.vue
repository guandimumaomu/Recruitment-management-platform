<template>
<a-breadcrumb style="margin: 20px">
    <a-breadcrumb-item>首页</a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in pathList">
      {{ routeMap[item] }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import {routeMapTool} from '@/utils/tools'
import { ref } from 'vue';

const route = useRoute()
const routeMap = routeMapTool()
// console.log(routeMap)
const pathList = ref<string[]>()

const pathToArr = (path: string) => {
  let arr = path.split('/').filter(i => i)
  let pathArr = arr.map((_, index) => {
    return '/'+arr.slice(0, index+1).join('/')
  })
  return pathArr
}



watch(route, (newVal) => {
  // console.log("路由变化了", newVal.path)
  pathList.value = pathToArr(newVal.path)

  
})

</script>

<style scoped>

</style>