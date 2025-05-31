<!-- JS -->
<script setup>
import { ref, watch, watchEffect } from "vue";

const todoId = ref(1);

const count = ref("");

const data = ref(null);

// watch( todoId, async()=>{
//       let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
//       data.value = await response.json();
// });

//------------------------------------------------------------------------------------------------
// agar aise placed hai or count mai sbse phle input dete hai toh console pe kuch bhi print ni hoga
// toh print kab hoga ? print tab hoga jab api ke liye input denge

/**
 * watchEffect(async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
  console.log(count.value);
  data.value = await response.json();
  });
 */
//-------------------------------------------------------------------------------------------------

// agr aise place hai toh jab  count value ke input mai phle value jati hai toh api hit hoga
watchEffect(async () => {
  console.log(count.value);
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );

  data.value = await response.json();
});
</script>

<!-- Template -->
<template>
  <div>
    <h1>WatchEffect</h1>
  </div>
  <div>
    TodoId:
    <input type="text" v-model="todoId" />
    <p>{{ data }}</p>
  </div>
  <div>
    <input type="text" v-model="count" />
    <p>Count value : {{ count }}</p>
  </div>
</template>
<!-- Template -->