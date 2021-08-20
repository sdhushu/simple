<template>
  <div :class="show ? 'box':''" :style="{display:query}" @click.self="handleClose()">
    <div v-if="show" class="simple-dialog">
      <div class="simple-title">{{ title }}</div>
      <div class="simple-desc">{{ message }}</div>
      <div>
        <simplebutton text type="primary" @click="handleClose('close')" v-if="confirmButton">取消</simplebutton>
        <simplebutton text type="primary" @click="handleClose('sure')" v-if="cancelButton">确定</simplebutton>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import simplebutton from "./Button.vue";
import createSnackbar from "./Snackbar"
import { defineProps,defineEmits,ref } from "vue";
let query = ref('')
const props = defineProps({
  title: String,
  message: String,
  show: Boolean,
  confirmButton:Boolean,
  cancelButton:Boolean,
});
const emits = defineEmits(['update:show'])
let handleClose = (state)=>{
    state == 'close' ? createSnackbar.warning('close'):createSnackbar.success('sure')
    emits('update:show',false)
    query.value = 'none'
}
</script>
<style>
.simple-dialog {
  width: 380px;
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%);
  background-color: #fff;
}

.simple-dialog div:nth-child(3) {
  align-self: flex-end;
  padding-right: 10px;
}
.box {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0,0.3);
}
.simple-title {
    font-size: 18px;
    font-weight: 400;
}
.simple-desc {
    font-size: 14px;
    color: #888;
}
</style>
