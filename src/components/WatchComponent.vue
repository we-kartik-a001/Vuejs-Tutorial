<template>
    <div>
        <p>Ask yes no question ?</p>
        <input type="text" v-model="question"/>
        <p>{{ question }}</p>
    </div>
</template>
<script>
const question = ref(' ');
</script>
