<template>
  <div class="bodys"><slot></slot></div>
</template>
 
<script setup>
import { ref } from "vue";
</script>
<style>
.bodys {
  height: 80%;
  background-color: cadetblue;
}
</style>
