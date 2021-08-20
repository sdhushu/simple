<template>
  <!-- <simplebutton type="warning" block @click="show = true"
    >基本使用</simplebutton
  > -->
  <!-- <simpledialog
    title="兰亭序"
    message="兰亭临帖 行书如行云流水"
    v-model:show="show"
  /> -->
  <simplebutton type="info" block @click="test()">基本使用</simplebutton>
</template>
 
<script setup>
import simplebutton from "./components/Button.vue";
import simpledialog from "./components/Dialog.vue";
import Dialog from "./components/Dialog";
import { ref } from "vue";
const show = ref(false);
let test = () => {
  Dialog({
    title: "兰亭序",
    message: "兰亭临帖 行书如行云流水",
    confirmButton: false,
    cancelButton: false,
  });
};
</script>
<style>
</style>
