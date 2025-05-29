<template>
  Condtional rendering

  <!-- hamne yaha isawsome ko !isawsome equual kardia -->
  <div>
    <button @click="isawsome = !isawsome">Toggle</button>
  </div>
  <div>
    <p v-if="isawsome">It is awsome</p>
    <p v-else>not awsome</p>
    <p v-show="isawsome"> v-show property</p>
  </div>

  <div>
    <div v-if="type == 1">1</div>
    <div v-else-if="type == 2">2</div>
    <div v-else-if="type == 3">3</div>
    <div v-else>Not a number</div>
  </div>

  <div>
    <button @click="ischeck = !ischeck">Toggle</button>
  </div>
  <div>
    <p v-if="ischeck">true</p>
    <p v-if="!ischeck">false</p>
  </div>

  <div v-if="showArticle">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deserunt sed consequuntur. Architecto cumque eaque, commodi accusamus sint excepturi dignissimos quas at, minima nobis, voluptates accusantium tempora. Quae, cupiditate nesciunt!</p>
  </div>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";

const isawsome = ref(true);

const ischeck = ref(false);

const type = ref(1);

const showArticle = ref(1);

setInterval(() => {
  type.value++;
}, 2000);

</script>