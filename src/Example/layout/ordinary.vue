<template>
  <simplewarp class="wrap">
    <simpletitle><div>标题</div></simpletitle>
    <simplebody><div>内容</div></simplebody>
    <simplefoot><div>底部</div></simplefoot>
  </simplewarp>

  <simplewarp class="wrap">
    <simpletitle><div>标题</div></simpletitle>
    <simplebody class="body1"><div>内容</div></simplebody>
  </simplewarp>

  <simplewarp>
    <simpletitle><div>标题</div></simpletitle>
    <simplebody2>
      <simplesidebar><div>侧边栏</div></simplesidebar>
      <simplecontent><div>内容框</div></simplecontent>
    </simplebody2>
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
.body1 {
  display: flex;
  justify-content: flex-start;
}

.sidebar {
    width: 20%;
    height: 100%;
    background-color: darkgrey;
}
.content {
    width: 80%;
    height: 100%;
    background-color: darkred;
}
</style>
