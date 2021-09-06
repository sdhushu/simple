<template>
  <!-- 基本使用 -->
  <simple-skeleton :loading="loading"></simple-skeleton>
  <!-- 显示标题 -->
  <simple-skeleton
    title
    :loading="loading"
    style="margin-top:50px"
  ></simple-skeleton>
  <!-- 自定义段落高度 -->
  <simple-skeleton
    title
    :rows="3"
    :loading="loading"
    :rows-width="['200px', '100px', '50px']"
    style="margin-top:50px"
  ></simple-skeleton>
  <!-- 显示头像 -->
  <simple-skeleton
    title
    avatar
    :loading="loading"
    style="margin-top:50px"
  ></simple-skeleton>
</template>
 
<script setup>
import { ref } from "vue";
import SimpleSkeleton from "./components/Skeleton.vue";
let loading = ref(true);
</script>
<style>
</style>
