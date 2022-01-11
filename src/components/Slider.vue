<template>
    <div class="slider">
        <div class="slider-button"></div>
    </div>
</template>

<script>
export default {
    props:{
        modelValue:Number
    },
    setup(props) {
        console.log(props.modelValue,'props')
    },
}
</script>

<style>
.slider {
    width: 100%;
    height: 1px;
    background-color: black;
    position:absolute;
}

.slider-button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: skyblue;
    position: relative;
    transform: translateY(-50%);
}
</style>