<template>
  <div class="title"><slot></slot></div>
</template>
 
<script setup>
import { ref } from "vue";
</script>
<style>
.title {
  height: 10%;
  background-color: blue;
}
</style>
