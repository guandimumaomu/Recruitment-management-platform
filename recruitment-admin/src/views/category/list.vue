<template>
    <a-table :columns="columns" :data-source="data">
      
      <!-- 插槽 -->
      <template #bodyCell="{ column}">  

        <template v-if="column.key === 'action'">
            <a-space>
                <a-button type="primary" size="small">编辑</a-button>
                <a-button type="primary" danger size="small">删除</a-button>
            </a-space> 
        </template>
      </template>
    </a-table>
  </template>
  <script lang="ts" setup>
  import { categoryGet } from '@/api/pro';
import { CategoryType } from '@/types/pro';
import { ref } from 'vue';
  const columns = [
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '分类图标',
      dataIndex: 'icon',
      key: 'icon',
    },
    {
      title: '操作',
      key: 'action',
    },
  ];
  
  const data = ref<Array<CategoryType>>([])
  categoryGet(true).then(res => {
    data.value = res.data.results
  })
  </script>
  
  