<template>
    <h1 :style="[styling, styling2]"> Dynamic inline styling </h1>
</template>

<!-- Js -->

<script setup>
import { computed, reactive, ref } from 'vue';

const activered = ref('white');
const fontchnage = ref(70);

const styling  = computed(()=>({
    color: activered.value,
    fontSize: fontchnage.value + 'px'
}));

setTimeout(( )=> {
    activered.value ="yellow";
}, 4000);

const styling2 = reactive({
  background: 'red',
  display: 'flex',
})
</script>
