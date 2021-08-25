<template>
      <div class="sidebar"><slot></slot></div>
</template>
 
<script setup>
import { ref } from "vue";
</script>
<style>
.sidebar {
    width: 20%;
    height: 100%;
    background-color: darkgrey;
}
</style>
