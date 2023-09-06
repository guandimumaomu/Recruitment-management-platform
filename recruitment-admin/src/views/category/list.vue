<template>
    <a-table :columns="columns" :data-source="data" rowKey="objectId">
        <!-- :columns="columns"：这是表格的列配置。通过columns属性，你可以将一个包含列定义的数组传递给表格组件，告诉表格应该有哪些列以及每一列的标题、数据索引等信息。这个属性使用了Vue中的绑定语法（:）来将数据绑定到columns属性。在这里，columns是一个在Vue脚本部分定义的数组，用于配置表格的列。

        :data-source="data"：这是表格的数据源配置。通过data-source属性，你可以将一个包含表格数据的数组或对象传递给表格组件，告诉表格要呈现的数据是什么。这个属性也使用了Vue中的绑定语法（:）来将数据绑定到data-source属性。在这里，data是一个在Vue脚本部分定义的响应式数据，用于存储表格要显示的数据。
         -->
      <!-- 插槽 -->
      <template #bodyCell="{ column}">  

        <!-- { column }是一个参数对象，这个对象包含了与当前表格单元格相关的信息。 -->

        <template v-if="column.key === 'action'">
            <a-space>
                <a-button type="primary" size="small" @click="handleEdit">编辑</a-button>
                <a-button type="primary" danger size="small">删除</a-button>
            </a-space> 
        </template>
      </template>
    </a-table>
  </template>
  <script lang="ts" setup>
  import { categoryGet } from '@/api/pro';
import { CategoryType } from '@/types/pro';
import { categoryToTree } from '@/utils/tools';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
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

  categoryGet(true).then((res) => {
        console.log(categoryToTree(res.data.results));
        
    
        data.value =  categoryToTree(res.data.results)
           
  })

  //编辑
  const router = useRouter()
  const handleEdit = () => {
    router.push("/category/edit")
  }
  </script>
  
  