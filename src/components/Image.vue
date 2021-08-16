<template>
  <div :class="[block?'simple-img-block':'']" class="simple-div">
    <img :src="src" :alt="alt" class="simple-img"  :style="{width:width,height:height,borderRadius:round}" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  src: String,
  width:String,
  height:String,
  round:String,
  alt:String,
  block:Boolean,
});
</script>
<style>
.simple-img {
    width: 100%;
    height: 100%;
}   
.simple-div {
    display: inline-block;
}

.simple-img-block {
    display: block;
}
</style>
