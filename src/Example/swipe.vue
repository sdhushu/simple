<template>
    <simpleswipe>
        <simpleitem>
            <img class="simple-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="">
        </simpleitem>
        <simpleitem>
            <img class="simple-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="">
        </simpleitem>
        <simpleitem>
            <img class="simple-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="">
        </simpleitem>
    </simpleswipe>
</template>
 
<script setup>
import simpleitem from "./components/Swipe-item.vue";
import simpleswipe from "./components/Swipe.vue";
</script>
<style>
.simple-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
