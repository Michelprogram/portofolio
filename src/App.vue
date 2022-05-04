<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
});
</script>

<style lang="scss">
.container {
  //border: 2px solid black;
}
</style>
