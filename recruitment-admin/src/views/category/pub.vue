<template>
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="分类名称" v-bind="validateInfos.name">
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="父级类目" v-bind="validateInfos.parentId">
        <a-select v-model:value="modelRef.parentId" placeholder="请选择父级类目">
          <a-select-option value="0-0">顶级类目</a-select-option>
          <a-select-option 
            v-for="item in parentList" 
            :key="item.objectId" 
            :value="item.objectId"
            >
                {{ item.name }}
        </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="分类图标" v-bind="validateInfos.icon">
        <!-- 全局引入图片上传组件，在main.ts里面 -->
        <img-upload />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
      </a-form-item>
    </a-form>
  </template>
  <script lang="ts" setup>
  import { reactive} from 'vue';
  import { Form } from 'ant-design-vue';
import { categoryPost } from '@/api/pro';
import { CategoryType } from '@/types/pro';
import {categoryGet} from '@/api/pro'
import { ref } from 'vue';
  
  const useForm = Form.useForm;
  
  const labelCol = { span: 4 };
  const wrapperCol = { span: 18 };
  //调整间隙
  const modelRef:CategoryType = reactive({
    name: '',
    parentId: '',
    icon: 'img.png',
  });
  const rulesRef = reactive({
    name: [
      {
        required: true,
        message: '请输入分类名称',
      },
    ],
    parentId: [
      {
        required: true,
        message: '请选择父级类目',
      },
    ],
    icon: [
      {
        required: true,
        message: '请上传分类图标',
      },
    ],
  });
  const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
    onValidate: (...args) => console.log(...args),
  });
  const onSubmit = () => {
    validate()
      .then(() => {
        categoryPost(modelRef)
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  //初始化类目列表
  const parentList = ref<Array<CategoryType>>([])
    
  categoryGet().then((res) => {
        //通过get请求加载的数据包是在result中
        //可以log一下res观察下数据包结构
        console.log(res);
        
        parentList.value = res.data.results
    })
  </script>
  
  