<template>
    <!-- a-upload通过接口地址进行图片上传,但leancloud本身并不支持通过
    api接口进行图片上传 ，所以换成upload组件中的自定义上传-->
    <a-upload
    
      v-model:file-list="fileList"
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :before-upload="beforeUpload"
      :customRequest = "handleUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="avatar" />
      <div v-else>
        <loading-outlined v-if="loading"></loading-outlined>
        <plus-outlined v-else></plus-outlined>
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import { message } from 'ant-design-vue';
//   import type { UploadChangeParam } from 'ant-design-vue';
import { FileType } from 'ant-design-vue/es/upload/interface';

import Cloud from 'leancloud-storage'
  
  function getBase64(img: FileType, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  }
  
  const fileList = ref([]);
  const loading = ref<boolean>(false);
  const imageUrl = ref<string>('');
  interface EmitsType{
    (e:'update:modelValue', arg:string):void
  }

  const emits = defineEmits<EmitsType>()


  const handleUpload = (info: any) => {
    // console.log(info);
      getBase64(info.file, async (base64) => {
        // console.log(base64);
        const file = new Cloud.File('recruit.png', { base64 })
        let res:any = await file.save()
        console.log(res);
        let {url} = res.attributes
        imageUrl.value = res.url
        emits('update:modelValue', url) //把数据提交给表单
      }) 
  }
//   const handleChange = (info: UploadChangeParam) => {
//     if (info.file.status === 'uploading') {
//       loading.value = true;
//       return;
//         }
//     // 监测图片上传进度
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj!, (base64Url: string) => {
//         imageUrl.value = base64Url;
//         loading.value = false;
//       });
//     }
//     if (info.file.status === 'error') {
//       loading.value = false;
//       message.error('upload error');
//     }
//   };


//   对图片类型和大小进行约束
  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  </script>
  <style scoped>
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  
  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }

  .avatar{
    width: 100%;
    height: 100%;
  }
  </style>
  