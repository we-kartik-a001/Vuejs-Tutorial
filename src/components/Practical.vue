<template>
  <button @click.prevent="boxmodifier()">Changes</button>

  <div><p :class="[colorstack, {active:isActive}]" >hisking</p></div>

  <div><p :class="colorchainer">valuedeclare</p> </div>

  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci
    iste consectetur beatae quia reprehenderit, ipsa incidunt quis unde nihil
    quas maiores eos numquam ea ex veritatis hic ducimus libero.
  </p>

  <!-- <div>
    <p>{{ colorchecker }}</p>
  </div> -->
</template>

<script setup>
import { reactive, ref } from "vue";

const colorstack = ref("textblack");

const colorattributed = reactive({
  colorRed: ref("textred"),
  colorGreen: ref("textgreen"),
});

// Color chnager function 
const boxmodifier = () => {
  console.log(colorstack.value);

  if (colorstack.value == "textblack") {
    colorstack.value = colorattributed.colorRed;
    return colorstack;
  }
  if (colorstack.value == "textred") {
    colorstack.value = colorattributed.colorGreen;
    return colorstack;
  } else {
    colorstack.value = "textblack";
    console.log(colorstack.value);
    return colorstack;
  }
};

// See if we define the value in a variable through the "ref" then if we 
// redclare the value in it then we dont use the "ref"
let colorchainer = ref('textred');
colorchainer.value = 'textgreen';

// const colorchecker = computed(() =>{
//   return  colorattributed.coloractive ? "active":'unactive';
// })

const isActive = ref(true);

</script>

<style scoped>
.textblack {
  color: black;
}
.textred {
  color: brown;
}
.textgreen {
  color: green;
}
</style>