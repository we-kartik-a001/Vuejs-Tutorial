<script setup>

import {ref, watchEffect} from "vue";
<<<<<<< feature/lecture-6-Form_Input_&_Watch_component
=======

>>>>>>> Practice
const name = ref('John');

watchEffect(() =>{
    console.log(`Hello, ${name.value}`);
});

</script>

<!-- Template -->
<template>
<input v-model="name" />
</template>