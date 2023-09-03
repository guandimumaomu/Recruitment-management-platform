<script setup lang="ts">
import { testPost } from '@/api/pro';

const handlePost = () => {
    testPost()
}
</script>


<template>
    <div>
        数据可视化
        <a-button type="primary" @click="handlePost">测试数据新增</a-button>
    </div>
</template>


<style scoped>
</style>