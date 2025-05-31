<script setup>
import { ref, watch } from "vue";

const name = ref("");

//basic
watch(name, (newValue, oldvalue) => {
  console.log(`${oldvalue} to ${newValue}`);
});

const status = ref("berozgar");
const statuschanger = ref("");

watch(status, (newValue, oldvalue) => {
  statuschanger.value = newValue;

  return statuschanger;
});

//medium
const search = ref("");
const result = ref(null);

watch(search, async (newsearch) => {
  if (!newsearch) {
    result.value = "";
    return;
  }

  result.value = "Loading";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  result.value = `Result of "${newsearch}"`;
});

// watch practice
const searchtext = ref("");
const searchresult = ref("");

watch(searchtext, async (newsearchtext) => {
  if (!newsearchtext) {
    searchresult.value = "";
    return;
  }

  searchresult.value = "Loading";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  searchresult.value = `Result of "${newsearchtext}"`;
});

// watch with api
const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");
const loading = ref(false);
const image = ref(null);

watch(question, async (newquestion, oldquestion) => {
  if (newquestion.includes("yes")) {
    loading.value = true;
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      answer.value = data.answer;
      image.value = data.image;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    } finally {
      loading.value = false;
    }
  }
});

//varaible printing
const x = ref("");

watch(x, (newx) => {
  console.log(`the value of x is ${newx}`);
});

const y = ref("");
watch(y, (newy) => {
  console.log(`the value of y is ${newy}`);
});

watch([x, y], ([newx, newy]) => {
  console.log(`${newx}, ${newy}`);
});

watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum value is ${sum}`);
  }
);

watch([x, () => y.value], ([newx, newy]) => {
  console.log(`values of x and y is ${newx} and ${newy}`);
});

// object reactive with watch
const teacher = ref({
  name: ' ',
  subject: ' ',
  age:0
})
watch(()=>teacher.value.name , (newteacher, olderteacher)=>{
     console.log(`${newteacher} and ${olderteacher}`);
})

</script>

<template>
  <input v-model="name" />

  <!-- practice -->
  <div>
    <input type="text" v-model="status" />
  </div>
  <p>
    {{ statuschanger }}
  </p>

  <!-- watch api -->
  <div>
    <input type="text" v-model="search" />
    <p>{{ result }}</p>
  </div>

  <!-- Watch api practice -->
  <div>
    <input type="text" v-model="searchtext" />
    <p>{{ searchresult }}</p>
  </div>

  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
    <!-- <p>{{ image}}</p> -->
    <img :src="image" />

    <div >
      <p>X:</p><input type="text" name="" id="" v-model="x" />
      <p>Y:</p><input type="text" name="" id="" v-model="y" />
    </div>
  </div>

  <div>
    <p>checker </p>
    <input v-model="teacher.name" placeholder="teacher name"/>
  </div>
</template>