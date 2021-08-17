<template>
  <!--主题色徽标 -->
  <simplebadge type="primary" />
  <simplebadge type="info" />
  <simplebadge type="success" />
  <simplebadge type="warning" />
  <simplebadge type="danger" />
  <simplebadge />
  <!-- 圆点徽标 -->
  <simplebadge type="danger" dot />
  <!-- 自定义徽标内容 -->
  <simplebadge type="danger" value="badge" />
  <simplebadge type="danger" value="hot" />
  <simplebadge type="danger" value="66" />
  <!-- 最大值 -->
  <simplebadge type="danger" :value="66" :max-value="99" />
  <simplebadge type="danger" :value="180" :max-value="99" />
  <!-- 不同定位徽标 -->
  <simplebadge type="danger" position="right-top">
    <simplechip color="#faecd8" square text-color="#e6a23c" plain
      >右上</simplechip
    >
  </simplebadge>
  <br />
  <br />
  <br />

  <simplebadge type="danger" position="right-bottom">
    <simplechip color="#faecd8" square text-color="#e6a23c" plain
      >右下</simplechip
    >
  </simplebadge>
  <br />
  <br />
  <br />
  <simplebadge type="danger" position="left-top">
    <simplechip color="#faecd8" square text-color="#e6a23c" plain
      >左上</simplechip
    >
  </simplebadge>
  <br />
  <br />
  <br />
  <simplbutton @click="handleChange">点击改变状态</simplbutton >
  <simplebadge type="danger" color="#6200ea" position="left-bottom" :hidden="hidden">
    <simplechip color="#faecd8" square text-color="#e6a23c" plain
      >右上</simplechip
    >
  </simplebadge>
</template>
 
<script setup>
import simplebadge from "./components/Badge.vue";
import simplechip from "./components/Chip.vue";
import simplebutton from './components/Button.vue'
import { ref } from "vue";
const hidden = ref(false);
const handleChange = () => {
  hidden.value = !hidden.value;
};
</script>
<style>
</style>
