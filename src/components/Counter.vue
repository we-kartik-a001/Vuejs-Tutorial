<template>
  <div class="text-center">
    <div>Counter component</div>

    <div>
      <button @click.prevent="decreaseCounter()">-</button>
      <span>{{ counter }}</span>
      <button @click.prevent="increaseCounter()">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};
const decreaseCounter = () => {
  counter.value--;
};
</script>


<!-- <script>
 export default{
    data()
    {
        return{
            counter:0
        }; 
    },
    methods:{
        decreaseCounter(){
            if(this.counter>0)
           { this.counter--;}
        },
        increaseCounter(){
            this.counter++;
        }
    }
 };
</script> -->

<style scoped>
.text-center {
  text-align: center;
}
</style>