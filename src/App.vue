<template>
  <Select placeholder="请选择一个选项" v-model="value">
    <Option label="吃饭" :value="1"></Option>
    <Option label="睡觉" :value="2"></Option>
  </Select>

</template>

<script setup>
import Select from './components/Select.vue';
import Option from './components/Option.vue'
import { ref } from '@vue/reactivity';
let value = ref('')
</script>

<style>
</style>
