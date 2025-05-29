<template>
  <div :class="$attrs.class">
    <h3 >ClassBinding</h3>
  </div>
  <div class="static-class" :class="$attrs.class">
    <div :class="{ active: isActive, 'text-danger': hasError }">
      Apply active class
    </div>
    <div :class="classObject">Apply active class</div>

    <div :class="[activeClass, errorClass]">Apply active class</div>

    <div :class="[isActive ? activeClass : ' ', errorClass]">
      Apply active class
    </div>

    <div :class="[{ active: isActive }, errorClass]">Apply active class</div>
  </div>
</template>
    <script setup>
import { computed, ref } from "vue";

const isActive = ref(true);
const hasError = ref(true);

const classObject = computed(() => {
  return {
    active: isActive.value && !hasError.value,
    "text-danger": hasError.value,
  };
});

const activeClass = ref("active");
const errorClass = ref("text-danger");
</script>