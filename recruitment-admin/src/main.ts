import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as antIcons from "@ant-design/icons-vue";

const app = createApp(App);

// 注册组件
Object.keys(antIcons).forEach((key: any) => {
  app.component(key, antIcons[key as keyof typeof antIcons]);
});
// 添加到全局
app.config.globalProperties.$antIcons = antIcons;

app.use(router)

app.mount('#app')
