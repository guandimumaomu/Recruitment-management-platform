<template>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" >招聘管理平台</div>
        <SiderMenu/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <AppBreadcrumb/>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Recruitment-admin ©2023 Created by cmx
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import SiderMenu from "./components/sider.menu.vue"
  import AppBreadcrumb from "./components/app-breadcrumb.vue"
  const collapsed =ref(false)

  </script>
  <style scoped>
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);

    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  </style>
  