<template>
    <simplechip type="primary">主要纸片</simplechip>
    <simplechip type="success">成功纸片</simplechip>
    <simplechip type="danger">危险纸片</simplechip>
    <simplechip type="warning">警告纸片</simplechip>
    <simplechip type="info">信息纸片</simplechip>
    <simplechip >默认纸片</simplechip>
    <!-- 简单纸片 -->
    <simplechip plain type="primary">简单纸片</simplechip>
    <!-- 非圆角 -->
    <simplechip square type="primary">非圆角纸片</simplechip>
    <!-- 纸片尺寸 -->
    <simplechip size="large">大纸片</simplechip>
    <simplechip size="small">小纸片</simplechip>
    <simplechip size="mini">迷你纸片</simplechip>
    <!-- 块级纸片 -->
    <simplechip block type="success">成功纸片</simplechip>
    <!-- 自定义颜色 -->
    <simplechip color="#009688">纸片</simplechip>
    <simplechip color="#009688" plain>纸片</simplechip>
    <simplechip color="#faecd8" text-color="#e6a23c" plain>纸片</simplechip>
    <simplechip color="#faecd8" text-color="#e6a23c">纸片</simplechip>
    <!-- 可关闭纸片 -->
    <simplechip block type="success" @close = "show=flase" v-if="show">可关闭纸片</simplechip>
</template>

<script setup>
import simplechip from "./components/Chip.vue"
import {ref} from 'vue'
let show = ref(true)

</script>
<style>
</style>
