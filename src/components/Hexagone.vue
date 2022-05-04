<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" fill="#FFF">
    <path
      d="M38,2 
             L82,2 
             A12,12 0 0,1 94,10 
             L112,44 
             A12,12 0 0,1 112,56
             L94,90       
             A12,12 0 0,1 82,98
             L38,98
             A12,12 0 0,1 26,90
             L8,56
             A12,12 0 0,1 8,44
             L26,10
             A12,12 0 0,1 38,2"
    />
    <text
      class="title"
      x="0"
      y="0"
      font-family="Verdana"
      fill="black"
      font-size="15px"
    >
      {{ name }}
    </text>
    <text
      class="description"
      x="0"
      y="0"
      font-family="Verdana"
      fill="black"
      font-size="15px"
    >
      {{ shortDescription }}
    </text>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CHexagone",
  props: {
    name: String,
    shortDescription: String,
  },
});
</script>

<style lang="scss">
.title {
  color: red;
  fill: red;
}
</style>
