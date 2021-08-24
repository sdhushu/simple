<template>
  <simpleinput placeholder="请输入文本" v-model="values" />
  <simpleinput placeholder="请输入文本" line v-model="values" />
  <simpleinput placeholder="请输入文本" textarea v-model="values" />
  <simpleinput placeholder="请输入文本" :maxlength="10" v-model="values" />
  <simpleinput placeholder="请输入文本" disabled v-model="values" />
  <simpleinput placeholder="请输入文本" readonly v-model="values" />

  {{ values }}
</template>
 
<script setup>
import simpleinput from "./components/Input.vue";
import { ref } from "vue";
const values = ref("");
// console.log(values.value)
</script>
<style>
</style>
