<script setup>
import { onBeforeUpdate, onUpdated, ref } from "vue";

const showpractice = ref(true);

const tagremover = () => {
  if (showpractice.value == true) {
    showpractice.value = false;
  } else {
    showpractice.value = true;
  }
};

onBeforeUpdate(() => {
  console.log(document.getElementById("practice"));
  console.log("on before update");
});

onUpdated(() => {
  console.log(document.getElementById("practice"));
  console.log("on update");
});

</script>

<template>
  <div>
    <counter></counter>
    <template-syntax></template-syntax>
    <FormInput />
    <watch-component />
    <watch-effect />
    <Practice id="practice" v-if="showpractice" />

    <div style="padding: 1rem 0">
      <button @click="tagremover">Button</button>
    </div>
    <div style="margin-bottom: 25rem"></div>
  </div>
</template>

