<template>
  <div>
    <div class="title">
      <img src="../assets/img/icons/contact.svg" alt="" srcset="" />
      <h2>Contact</h2>
    </div>

    <div class="form-mail">
      <form @submit.prevent="submit" @reset="onReset">
        <div class="top-input">
          <div>
            <label>Name</label>
            <input v-model="name" />
          </div>

          <div>
            <label>Email</label>
            <input v-model="email" />
          </div>
        </div>

        <div class="bot-input">
          <div>
            <textarea
              v-model="message"
              placeholder="Your message here !"
            ></textarea>
          </div>
        </div>
        <div>
          <button type="submit">
            AAAA<a href="../assets/img/icons/send.svg"></a>
          </button>
          <button type="reset">
            BBB<a href="../assets/img/icons/reset.svg"></a>
          </button>
        </div>
      </form>
    </div>

    <div class="other-contact">
      <img src="../assets/img/icons/twitter.svg" srcset="" />
      <img src="../assets/img/icons/github.svg" srcset="" />
      <img src="../assets/img/icons/linkedin.svg" srcset="" />
    </div>
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
@use "../assets/scss/variables" as var;

@import "../assets/scss/base";

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-input,
.bot-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 90%;
  margin-left: 5%;
}

.top-input {
  margin-top: 3%;
  margin-bottom: 3%;
  label {
    font-size: 1.5em;
  }
  input {
    font-size: 1em;
    height: 25px;
    margin-left: 2%;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 2px solid var.$background-color;
  }
}

.bot-input {
  textarea {
    width: 500px;
    height: 250px;

    letter-spacing: 2px;
    font-size: 1.25em;
    resize: none;
  }
}
</style>
