<template>
  <div>
    <div class="title">
      <img src="../assets/img/icons/contact.svg" alt="" srcset="" />
      <h2>Contact</h2>
    </div>

    <div class="form-mai">
      <form @submit.prevent="submit" @reset="onReset">
        <div>
          <label>name</label>
          <input v-model="name" />
        </div>

        <div>
          <label>email</label>
          <input v-model="email" />
        </div>

        <div>
          <label>message</label>
          <textarea v-model="message"></textarea>
        </div>

        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </form>
    </div>

    <div class="other-contact">Twitter Linkedin GitHub</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Contact extends Vue {
  name: string = "";
  email: string = "";
  message: string = "";
}
</script>

<style lang="scss">
@import "../assets/scss/base";
</style>
