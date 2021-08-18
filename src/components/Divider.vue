<template>
  <div :class="[vertical ? 'simple-hr--vertical':'']">
    <hr v-if="!vertical"
      class="simple-hr"
      :class="[
        dashed ? 'simple-hr--dashed' : '',
      ]"

    />
  </div>
</template>
 
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  dashed: Boolean,
  vertical:Boolean,
});
</script>
<style>
.simple-hr {
  color: rgb(219, 224, 223);
}
.simple-hr--dashed {
  border: 1px dashed rgb(219, 224, 223);
}
.simple-hr--vertical {
    /* width: 1px; */
    height: 30px;
    border-left: 1px solid gray;
    display: inline-block;
}
</style>
