<script setup>
import { reactive, ref } from "vue";

const message = ref("parent");
const books = reactive([
  { title: "Book1" },
  { title: "Book2" },
  { title: "Book3" },
  { title: "Book4" },
  { title: "Book5" },
  { title: "Book6" },
]);

const homes = {
  city: "delhi",
  place: "dwarka",
};

const persons = reactive({
  name: "kartik",
  lastname: "aswal",
  age: "23",
  city: "Delhi",
  location: "dwarka",
});
</script>

<template>
  <div>List Rendering</div>

  <div>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        {{ message }} - {{ book.title }}
      </li>
    </ul>

    <ul>
      <li v-for="(home, key, index) in homes">
        {{ index }} {{ key }} - {{ home }}
      </li>
    </ul>

    <ul>
      <li v-for="(person, key, index) in persons">
       {{ index }} :  {{key}} : {{ person }}
      </li>
    </ul>
   
  </div>
</template>
