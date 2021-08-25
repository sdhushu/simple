<template>
  <div class="body1">
    <slot></slot>
  </div>
</template>
 
<script setup>
import { ref } from "vue";
</script>
<style>
.body1 {
  display: flex;
  justify-content: flex-start;
  height: 90%;
  background-color: cadetblue;
}
</style>
