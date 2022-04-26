<template>
  <div class="container">
    <NavProfile
      ref="navPart"
      :class="navIsOpen ? 'active-navbar' : 'hide-navbar'"
      @onTrigger="triggerNav()"
    />
    <div class="header">
      <p>Gauron dorian</p>
      <img src="../assets/img/icons/grid.svg" alt="" @click="triggerNav()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavProfile from "./NavProfile.vue";
import Home from "./Home.vue";

@Options({
  components: {
    NavProfile,
    Home,
  },
})
export default class Navbar extends Vue {
  navIsOpen: boolean = false;

  triggerNav(): void {
    this.navIsOpen = !this.navIsOpen;
  }

  getNavIsOpen(): boolean {
    return this.navIsOpen;
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style";

.default {
  transition: transform 1.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.active-navbar {
  @extend .default;
  transform: translateX(0px);
}

.hide-navbar {
  @extend .default;
  transform: translateX(-100%);
}

.header {
  display: flex;
  justify-content: space-around;
  gap: 50px;
  align-items: center;
  height: 12vh;

  p {
    font-size: 1.3em;
    font-weight: 200;
  }

  img {
    width: 30px;
    cursor: pointer;
  }
}
</style>
