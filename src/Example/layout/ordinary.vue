<template>
  <simplewarp class="wrap">
      <simpletitle><div>标题</div></simpletitle>
      <simplebody><div>内容</div></simplebody>
      <simplefoot><div>底部</div></simplefoot>
  </simplewarp>
</template>
 
<script setup>
import simplewarp from "./components/layout/ordinary/Wrap.vue";
import simpletitle from "./components/layout/ordinary/Title.vue";
import simplebody from "./components/layout/ordinary/Body.vue";
import simplefoot from "./components/layout/ordinary/Foot.vue";
import { ref } from "vue";
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
</style>
