<template>
  <div class="body"><slot></slot></div>
</template>
 
<script setup>
import { ref } from "vue";
</script>
<style>
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
