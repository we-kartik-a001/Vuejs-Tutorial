<script setup>

import {ref, watchEffect} from "vue";
const name = ref('John');

watchEffect(() =>{
    console.log(`Hello, ${name.value}`);
});

</script>

<!-- Template -->
<template>
<input v-model="name" />
</template>