<template>
  <!-- 主题色按钮 -->
  <simplesbutton v-water @click="handleClick">默认按钮</simplesbutton>
  <simplesbutton type="primary" v-active>主要按钮</simplesbutton>
  <simplesbutton type="info">信息按钮</simplesbutton>
  <simplesbutton type="success">成功按钮</simplesbutton>
  <simplesbutton type="warning">警告按钮</simplesbutton>
  <simplesbutton type="danger">危险按钮</simplesbutton>
  <!-- 文字按钮 -->
  <simplesbutton text outline type="primary">外边框按钮</simplesbutton>
  <simplesbutton text type="primary">纯文字按钮</simplesbutton>
  <!-- 禁用状态 -->
  <simplesbutton disabled>禁用按钮</simplesbutton>
  <simplesbutton disabled text outline>禁用按钮</simplesbutton>
  <simplesbutton disabled text>禁用按钮</simplesbutton>
  <!-- 按钮尺寸 -->
  <simplesbutton type="primary">常规按钮</simplesbutton>
  <simplesbutton type="success" size="small">小型按钮</simplesbutton>
  <simplesbutton type="warning" size="mini">迷你按钮</simplesbutton>
  <simplesbutton type="danger" size="large">大型按钮</simplesbutton>
  <!-- 块级按钮 -->
  <simplesbutton block type="primary">块级按钮</simplesbutton>
  <!-- 自定义颜色 -->
  <simplesbutton color="#69dbaa" text-color="#eee">背景/文字</simplesbutton>
  <simplesbutton
    color="linear-gradient(to right, #69dbaa, #3a7afe)"
    text-color="#fff"
    >使用渐变</simplesbutton
  >
  <!-- 圆形按钮 -->
  <simplesbutton type="primary" round></simplesbutton>
  <!-- 加载按钮 -->
  <simplesbutton type="primary" loading-type="circle">加载状态</simplesbutton>
  <simplesbutton type="info" loading-type="rect">加载状态</simplesbutton>
  <simplesbutton type="success" loading-type="disappear">加载状态</simplesbutton>
  <simplesbutton type="warning" loading-type="cube">加载状态</simplesbutton>
  <simplesbutton type="danger" loading-type="wave">加载状态</simplesbutton>
</template>

<script setup>
import simplesbutton from "./components/Button.vue";
let handleClick = ()=>{
  console.log('1111')
}
</script>

<style>
</style>
