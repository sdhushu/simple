<template>
    <div style="position: relative">
        <!-- <div v-if="show" :class="[show ? 'simple-input--text' : '']">
      <label>{{placeholder}}</label>
        </div>-->
        <input
            v-if="!textarea"
            class="simple-input"
            :class="[
                show ? 'simple-input--focus' : '',
                line ? 'simple-input--line' : '',
                disabled ? 'simple-input--disabled' : '',
            ]"
            type="text"
            :disabled="disabled || readonly"
            v-model="value"
            :maxlength="maxlength"
            @input="handleinput"
            @focus="handleFocus"
            @blur="handleBlur"
            
        />
        <div class="item-wrap" v-show="show"> 
            <slot></slot>
        </div>

        <textarea
            v-if="textarea"
            name
            id
            class="simple-input"
            :class="[
                textarea ? 'simple-textarea' : '',
                show ? 'simple-input--focus' : '',
                disabled ? 'simple-input--disabled' : '',
            ]"
            rows="8"
            v-model="value"
            :disabled="disabled || readonly"
            @input="handleinput"
            @focus="handleFocus"
            @blur="handleBlur"
        ></textarea>
        <label
            class="simple-input--label"
            :class="[
                show ? 'simple-input--change' : '',
                value ? 'simple-input--change' : '',
                disabled ? 'simple-input--disabled--text' : '',
            ]"
        >{{ placeholder }}</label>
        <div v-if="textValue" class="simple-count">
            <span>当前选择的是{{textValue}}</span>
        </div>
    </div>
</template>
 
<script setup>
import { defineProps, defineEmits, ref, provide, inject, watch } from "vue";
const props = defineProps({
    placeholder: String,
    modelValue: String,
    line: Boolean,
    textarea: Boolean,
    maxlength: Number,
    disabled: Boolean,
    readonly: Boolean,
});
const emits = defineEmits(["update:modelValue"]);

let value = ref("");
let show = ref(false);
let label = ref('')
let textValue = ref('')
let handleinput = () => {
    emits("update:modelValue", value.value);
};
let handleFocus = () => {
    show.value = true;
};
let handleBlur = () => {
    setTimeout(() => {
        show.value = false;
    },300)
};
let handleCommit = (e) => {
    label.value = e
}
let handleText = (e) => {
    textValue.value = e
}
provide('handleCommit',handleCommit)
provide('handleText',handleText)
watch(label,(newValue)=>{
    value.value = newValue
})

</script>
<style>
.simple-input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
}
.simple-input--focus {
    border: none;
    outline: none;
    border-bottom: 1px solid skyblue;
}
.simple-input--label {
    position: absolute;
    top: -10%;
}
.simple-input--change {
    top: -8%;
    color: skyblue;
    transform-origin: left;
    transition-property: top, transform;
    transition-duration: 0.3s;
    font-size: 8px;
}
.simple-input--line {
    border: none;
}
.simple-textarea {
    resize: none;
    height: auto;
}
.simple-count {
    display: flex;
    justify-content: flex-start;
    font-size: 10px;
    color: rgb(194, 197, 201);
}
input:disabled {
    background-color: #fff;
}
textarea:disabled {
    background-color: #fff;
}
.simple-input--disabled--text {
    color: rgb(194, 197, 201);
}
.simple-input--disabled {
    border-bottom: 1px solid rgb(194, 197, 201);
}
.item-wrap {
    width: 100%;
    overflow: hidden;
    height: auto;
    background-color: white;
    position: absolute;
    top: 20px;
    /* padding: 10px 10px ; */
    /* background-color: #F0F2F5; */
    box-shadow: 2px 2px 2px #f3f2f2;
    border-radius: 10px;
    z-index: 2000;
}
</style>
