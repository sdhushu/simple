<template>
    <div class="option-wrap">
        <div class="option" @click="handleClick(label,value)">{{label}}</div>
    </div>
</template>

<script setup>
import { defineProps, inject } from '@vue/runtime-core';
const props = defineProps({
    label:String,
    value:Number
})
const handleCommit = inject('handleCommit')
const handleText = inject('handleText')
let handleClick = (label,value) => {
    handleCommit(label)
    handleText(value)
    console.log(props.value,'value')
}



</script>

<style>
.option-wrap {
    height: auto;
    width: 100%;
    font-size: 18px;

}
.option {
    width: 100%;
    height: 20px;
    padding: 10px 10px;
}
.option:hover {
    background: skyblue;
}
</style>