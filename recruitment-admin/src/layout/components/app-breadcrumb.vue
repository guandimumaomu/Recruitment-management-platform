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
const pathList = ref<string[]>([]) //默认空数组

const pathToArr = (path: string) => {
  console.log(path)
  //"/category/pub"
  
  let arr = path.split('/').filter(i => i)
  let pathArr = arr.map((_, index) => {
    return '/'+arr.slice(0, index+1).join('/')
  })
  console.log(pathArr)
  //  ['/category', '/category/pub']
  
  return pathArr
}



watch(route, (newVal) => {
  // console.log("路由变化了", newVal.path)
  //在 Vue 3 中，响应式变量的值可以通过 .value 属性进行读取和修改。

  //路径发生了变化，立即调用pathArr函数，将路径变为路径数组
  //遍历路径数组，生成对应的文本标签
  pathList.value = pathToArr(newVal.path)
  console.log(routeMap)
})

</script>

<style scoped>

</style>