import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as antIcons from "@ant-design/icons-vue";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

// 注册组件
Object.keys(antIcons).forEach((key: any) => {
  app.component(key, antIcons[key as keyof typeof antIcons]);
});
// 添加到全局
app.config.globalProperties.$antIcons = antIcons;

app.use(router)
app.use(Antd)

app.mount('#app')
