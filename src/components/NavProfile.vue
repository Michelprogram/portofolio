<template>
  <div class="container-nav">
    <div class="all_cont">
      <div class="top_side">
        <div class="cross-container">
          <img src="../assets/img/icons/close.svg" @click="triggerNav()" />
        </div>
        <div class="profile_picture">
          <img src="../assets/img/profile.jpg" alt="" srcset="" />
        </div>
        <div class="description">
          <p>👋 Hi, I'm</p>
        </div>
        <div class="name">
          <h1>Gauron Dorian</h1>
        </div>
      </div>
      <div class="bottom_side">
        <ul class="nav_list">
          <li class="nav_item">
            <img src="../assets/img/icons/home.svg" alt="" srcset="" />
            <router-link
              to="/"
              :class="isActivePath('home') ? 'active-link' : 'link'"
              @click="triggerNav()"
              >Home</router-link
            >
          </li>
          <li class="nav_item">
            <img src="../assets/img/icons/profile.svg" alt="" srcset="" />
            <router-link
              to="/about"
              :class="isActivePath('about') ? 'active-link' : 'link'"
              @click="triggerNav()"
              >About</router-link
            >
          </li>
          <li class="nav_item">
            <img src="../assets/img/icons/portofolio.svg" alt="" srcset="" />
            <router-link
              to="/portofolio"
              :class="isActivePath('portofolio') ? 'active-link' : 'link'"
              @click="triggerNav()"
              >Portofolio</router-link
            >
          </li>
          <li class="nav_item">
            <img src="../assets/img/icons/skills.svg" alt="" srcset="" />
            <router-link
              to="/skills"
              :class="isActivePath('skills') ? 'active-link' : 'link'"
              @click="triggerNav()"
              >Skills</router-link
            >
          </li>
          <li class="nav_item">
            <img src="../assets/img/icons/contact.svg" alt="" srcset="" />
            <router-link
              to="/contact"
              :class="isActivePath('contact') ? 'active-link' : 'link'"
              @click="triggerNav()"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {
  triggerNav(): void {
    this.$emit("onTrigger");
  }
  isActivePath(expectedLink: string): Boolean {
    return this.$route.name == expectedLink;
  }
}
</script>

<style lang="scss">
@use "../assets/scss/variables" as var;
@import "../assets/scss/style";

.container-nav {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: var.$background-color;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translatex(-100%);
  .all_cont {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 100vh;
  }
}

.top_side {
  width: 100%;

  .cross-container {
    img {
      cursor: pointer;
    }
  }
  .profile_picture {
    img {
      border-radius: 22px;
      width: 180px;
      margin-bottom: 5%;
      margin-top: 5%;
    }
  }
}

.bottom_side {
  display: flex;
  flex-direction: column;

  font-size: 1.5em;
  font-weight: 200;
  width: 100%;

  .nav_list {
    .nav_item {
      display: flex;
      align-items: center;
      margin-bottom: 8%;

      &:hover {
        .link {
          color: var.$title-color-active;
        }
      }

      img {
        width: 35px;
        filter: var.$icon-unactive;
      }

      .link {
        color: var.$title-color-unactive;
        transition: color 0.5s ease-in-out;
        cursor: pointer;
        margin-left: 10%;
      }

      .active-link {
        @extend.link;
        color: var.$title-color-active;
      }
    }
  }
}
</style>
