<template>
<!-- 基本使用 -->
  <simpleswitch v-model="value" />
  <!-- 不可用 -->
  <simpleswitch v-model="values" disabled />
  <!-- 自定义颜色 -->
  <!-- <simpleswitch v-model="colorValue" color="#ff9f00" close-color="#f5cb90" /> -->
  <!-- 不同大小 -->
  <simpleswitch v-model="value" width="100" height="30" cicle="40"/>

</template>
 
<script setup>
import simpleswitch from "./components/Switch.vue";
import { ref } from "vue";
let value = ref(true)
let values = ref(true)
let colorValue = ref(false)
</script>
<style>
</style>
