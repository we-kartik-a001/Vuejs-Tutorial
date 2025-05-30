<script setup>
import { reactive, ref } from "vue";

const practicalDatas = reactive([
  {
    id: 1,
    title: "diver",
    content: "loremsaf dgdtew uhfgnfun gnfnofg",
  },
  {
    id: 2,
    title: "rogan",
    content: "loremsaf dgdtew uhfgnfun gnfnofg",
  },
  {
    id: 3,
    title: "biker",
    content: "loremsaf dgdtew uhfgnfun gnfnofg",
  },
]);

const propertyDatas = reactive({
  name: "kartik",
  lastname: "aswal",
  age: "23",
  city: "Delhi",
  location: "dwarka",
});

const shuffle =() =>{
    practicalDatas.sort(() => Math.random()-0.5);
}

const count  = ref(0);

const oncountChanger = (name, event) =>{
    count.value++;
    console.log(name);
    console.log(event.target.tagName);
}

</script>

<template>
  <h1>Practical 2</h1>

  <div>
    <ul>
      <li v-for="practicalData in practicalDatas" :key="practicalData.id">
        <div>{{ practicalData.title }}- {{ practicalData.content }}</div>
        <input type="text" />
      </li>
    </ul>
  </div>
  <div>
    <button @click="shuffle">Shuffle</button>
  </div>

  <div>
    <ul>
      <li v-for="(property, index, key) in propertyDatas" :key="key">
        {{ key }}: {{ index }} - {{ property }}
      </li>
    </ul>
  </div>

  <template v-for="n in 10">
    <p>Web dev</p>
    <p>channel</p>
  </template>

  <div>
    <button @click="oncountChanger('leela', $event)">Counter</button>
    <div>
        {{ count }}
    </div>
  </div>
</template>