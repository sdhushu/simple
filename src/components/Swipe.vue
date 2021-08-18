<template>
  <div class="simple-swipe">
    <div class="simple-swipes"><slot></slot></div>
  </div>
</template>
 
<script setup>
</script>
<style>
.simple-swipe {
  height: 160px;
  overflow: hidden;
}
.simple-swipes {
  width: 903px;
  height: 100%;
  display: flex;
  transition-duration: 300ms;
  transform: translateX(0px);
}
</style>
