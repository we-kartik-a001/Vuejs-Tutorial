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
const searchresult = ref(null);

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

watch(question, async (newquestion, oldquestion) => {
  if (newquestion.includes("yes")) {
    loading.value = true;
    answer.value = "Thinking...";
    try {
    const res = await fetch("https://yesno.wtf/api");
    answer.value = (await res.json()).answer;
  } catch (error) {
    answer.value = "Error! Could not reach the API. " + error;
  } finally {
    loading.value = false;
  }
  }
  
});
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
  </div>
</template>