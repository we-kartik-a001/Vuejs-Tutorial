<template>
  <!-- From this button we will add or remove the image  -->
  <button  @[eventname1]="image_viewer" class="bg-gray-800 p-4 m-2 text-white font-semibold">
    {{ button_message }}
  </button>

  <!-- view image -->
  <div class="w-full">
    <img  class="rounded-md flex justify-center items-center mx-auto" :src="imageSrc" v-bind="attrib" alt="" />
  </div>

</template>

<!-- Adding the js here  -->
<script setup>
import { reactive, ref } from "vue";

const imageSrc =
  "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const button_message = ref("view");

const attrib = reactive({
  id: "image",
  class: "",
});

const eventname1 = "click";

const image_viewer = () => {
  if (button_message.value == "view") {
    button_message.value = "remove";
    attrib.class = "photo";
  } else {
    button_message.value = "view";
    attrib.class = "";
  }
};
</script>

<style scoped>
.photo {
  display: none;
}
</style>
