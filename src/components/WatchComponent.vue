<template>
  <div>
    <p>Ask yes no question ?</p>
    <input type="text" v-model="question" />
    <p style="white-space: pre-line">{{ question }}</p>

    <div>
      <textarea v-model="message">message</textarea>
      <p style="white-space: pre-line">{{ message }}</p>
    </div>
  </div>

  <!-- Checkbox -->
  <div>
    <input type="checkbox" v-model="checkbox_value" />
    {{ checkbox_value }}
  </div>

  <!-- Checkbox with custom value -->
  <div>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checkbox_custome_value"
    />
    {{ checkbox_custome_value }}
  </div>

  <!-- Dynamic checkbox -->
  <div>
    <input type="checkbox" value="Nayan" v-model="checked_names" />
    <input type="checkbox" value="Mohan" v-model="checked_names" />
    <input type="checkbox" value="Rahul" v-model="checked_names" />
  </div>
  <p>{{ checked_names }}</p>

  <!-- Radio -->
  <div>
    <input type="radio" value="one" v-model="checked_radio" />
    <input type="radio" value="two" v-model="checked_radio" />
  </div>

  <div>
    {{ checked_radio }}
  </div>

  <!-- select -->
  <div>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
    </select>
    <p>value is {{ selected }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const question = ref(" ");

const message = ref("webdev");

const answer = ref("question genrally container");

// Checkbox
const checkbox_value = ref(true);

const checked_names = ref([]);

const checkbox_custome_value = ref("yes");

// radio
const checked_radio = ref("one");

//select
const selected = ref("A");
</script>
