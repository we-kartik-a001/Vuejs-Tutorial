<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  watch,
  watchEffect,
} from "vue";

const count = ref(0);
const heading = ref(null);

// Default flush ('pre'): Runs before DOM update
watchEffect(() => {
  console.log("Pre -count is", count.value);
});

// flush: 'post' - Runs AFTER DOM updates
watchEffect(
  () => {
    console.log("Pre -count is", count.value);
    console.log("Heading text content", heading.value?.textContent);
    console.log("Heading Value", heading.value);
  },
  { flush: "post" }
);

// flush: 'sync' - Runs synchronously, even before DOM updates or other watchers
watchEffect(
  () => {
    console.log("Sync - Count is", count.value);
  },
  { flush: "sync" }
);

// Method to use the unwatch
const number = ref(0);

const stopWatcher = watch(number, async (newNumber) => {
  console.log("Number changed:", newNumber);
  if (newNumber > 5) {
    console.log("Stopping watcher...");
    stopWatcher();
  }
});

const increase = () => {
  number.value++;
};

// Mounting
const title = "Practice 3";
// onBeforeMount can't acces the dom elements
onBeforeMount(() => {
  console.log(document.getElementById("practice_title"));
  console.log("Before Mounted");
});

// onMounted can access the dom elements
onMounted(() => {
  console.log(document.getElementById("practice_title"));
  console.log("Elements are mounted");
});

// this is used just before the unmount
// it can access the dom elements
onBeforeUnmount(() => {
  console.log(document.getElementById("practice_title"));
  console.log("on before unmount");
});

// this is used the after the umount
// it can't access the dom element
onUnmounted(() => {
  console.log(document.getElementById("practice_title"));
  console.log("on Umounted");
});

onBeforeUpdate(() => {
  console.log("Before update. Count is:", number.value);
});

onUpdated(() => {
  console.log("Updated. Count is:", number.value);
});
</script>

<template>
  <h1 id="practice_title">{{ title }}</h1>

  <!-- through ref we are accesing the whole value tag -->
  <h1 ref="heading">{{ count }}</h1>

  <p>{{ number }}</p>

  <button @click="increase">Click</button>
</template>
