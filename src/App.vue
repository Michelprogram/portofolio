<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "./components/NavBar.vue";

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style>
.container {
  border: 2px solid black;
}
</style>
