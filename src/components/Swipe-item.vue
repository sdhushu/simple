<template>
  <div class="swipe-item">
    <slot></slot>
    <div class="simple-all">
      <div class="simple-swipe--dot"></div>
      <div class="simple-swipe--dot"></div>
      <div class="simple-swipe--dot"></div>
    </div>
  </div>
</template>
 
<script setup>
import { defineProps } from "vue";


const props = defineProps({});
</script>
<style>
.swipe-item {
  width: 100%;
  height: 100%;
  position: relative;
}
.simple-all {
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.simple-swipe--dot {
  width: 8px;
  height: 8px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: antiquewhite;
}
</style>
