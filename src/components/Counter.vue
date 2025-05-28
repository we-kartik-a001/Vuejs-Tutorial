<template>
  <!-- Ref method -->
  <div class="text-center">

    <div>Counter component</div>
    <div>{{ counterTitle }}</div>

    <div>
      <button @click.prevent="decreaseCounter()">-</button>
      <span>{{ counter }}</span>
      <button @click.prevent="increaseCounter()">+</button>
    </div>

    <!-- v-model used to fetch the value-->
    <input type="text" v-model="counterTitle" />

  </div>

  <!-- Reactive method  -->
  <div class="text-center">

    <div>
      <p>{{ numbercheck.counterTitle }}</p>
    </div>
    <div>
      <button @click.prevent="decreasenumber()">-</button>
      <span>{{ numbercheck.count }}</span>
      <button @click.prevent="increasenumber()">+</button>
    </div>
    <!-- v-model used to fetch the value-->
    <input type="text" v-model="numbercheck.counterTitle" />
    
  </div>


</template>

<script setup>
import { reactive, ref } from "vue";

/**
 * Ref method
 */
const counter = ref(0);

const counterTitle = ref("counter title");

const increaseCounter = () => {
  counter.value++;
};
const decreaseCounter = () => {
  counter.value--;
};

/**
 * Reactive  method
 */
const numbercheck = reactive({
  count: 0,
  counterTitle: ref("Number cheker"),
});

const increasenumber = () => {
  numbercheck.count++;
};
const decreasenumber = () => {
  numbercheck.count--;
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>