<template>
      <div class="content"><slot></slot></div>
</template>
 
<script setup>
import { ref } from "vue";
</script>
<style>
.content {
    width: 80%;
    height: 100%;
    background-color: darkred;
}
</style>
