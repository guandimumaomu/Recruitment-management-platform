import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as antIcons from "@ant-design/icons-vue";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import ImgUpload from './components/img-upload.vue'

import './utils/init-leancloud'  //初始化leancloudSDK

const app = createApp(App);

// 注册组件
Object.keys(antIcons).forEach((key: any) => {
  app.component(key, antIcons[key as keyof typeof antIcons]);
});
// 添加到全局
app.config.globalProperties.$antIcons = antIcons;
//图片上传组件全局注册到app下面
app.component('img-upload', ImgUpload)
app.use(router)
app.use(Antd)

app.mount('#app')
