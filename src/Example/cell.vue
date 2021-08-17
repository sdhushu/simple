<template>
<!-- 普通单元格 -->
    <simplecell>这是单元格</simplecell>
    <!-- 描述单元格 -->
    <simplecell title="这是单元格" desc="描述" />
    <!-- 边框单元格 -->
    <simplecell title="这是单元格" desc="描述" border/>
</template>

<script setup>
import simplecell from "./components/Cell.vue";
</script>
<style>
</style>
