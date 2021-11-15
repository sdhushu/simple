<template name="Interval">
    <div v-show="className">
        <a href="www.baidu.com">链接</a>
    </div>
</template>

<script setup>
import { defineProps } from '@vue/runtime-core';
import { ref } from '@vue/reactivity';
const props = defineProps({
    interval: Number,
    open: Boolean
})
let className = ref(true)
console.log('解析了----------', props.open)

props.open ? (() => {
    setInterval(() => {
        className.value = !className.value
    }, props.interval);
})()
    : ''

</script>

<style>
</style>