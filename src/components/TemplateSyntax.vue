<template>
  <!-- Here we have used the dynamic id -->
  <div :id="dynamic">Coder Woder {{ message }}</div>

  <!-- Method to print the html text correctly -->
  <div v-html="htmltext"></div>

  <!-- Passing the multiple attributes -->
  <div v-bind="ObjectOfAttributes">Attributes Binder</div>

  <!-- Conditional rendering -->
  <div @[eventname]="changeTitle">
    {{ message ? "yes" : "no" }}
    {{ Math.random() }}
  </div>

  <!-- It contain the dynamic argument -->
  <div>
    <p :[titleAtr]="titleValue">dynamic Argument</p>
  </div>

</template>

<!-- Script -->
<script setup>
const message = "Hello there";

const htmltext = "<h1>Html text</h1>";

/**
 * From here we are passing the id dynamically
 */
const dynamicID = "my-id";

/**
 * Dynamically binding the multiple attributes
 */
const ObjectOfAttributes = {
  id: "weber",
  class: "container",
};

/**
 * Dyanmic Argument
 */
const titleAtr = "Title";
const titleValue = "This is title value";

function changeTitle()
{
    alert('Hello world');
}

const eventname ='mouseover'
</script>
