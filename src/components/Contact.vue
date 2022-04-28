<template>
  <div>
    <div class="title">
      <img src="../assets/img/icons/contact.svg" alt="" srcset="" />
      <h2>Contact</h2>
    </div>

    <div class="form-mail">
      <form @submit.prevent="submit" @reset="onReset">
        <div class="contain-form">
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
        </div>
        <div class="buttons">
          <div type="submit" class="container-submit">
            <img alt="send your message" src="../assets/img/icons/send.svg" />
          </div>
          <div type="reset" class="container-submit">
            <img alt="send your message" src="../assets/img/icons/reset.svg" />
          </div>
        </div>
      </form>
    </div>

    <div class="other-contact">
      <div class="container-img-link">
        <img src="../assets/img/icons/twitter.svg" srcset="" />
        <a href="https://twitter.com/loutre_verte" target="_blank">@bivouac</a>
      </div>
      <div class="container-img-link">
        <img src="../assets/img/icons/github.svg" srcset="" />
        <a href="https://github.com/Michelprogram" target="_blank"
          >Michel program</a
        >
      </div>
      <div class="container-img-link">
        <img src="../assets/img/icons/linkedin.svg" srcset="" />
        <a
          href="https://www.linkedin.com/in/dorian-gauron-534716187/"
          target="_blank"
          >Gauron Dorian</a
        >
      </div>
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

form,
.buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

form {
  width: 100%;
  margin-bottom: 5%;
}

.buttons {
  width: 30%;
  .container-submit {
    padding: 2%;
    border-radius: 50px;
    cursor: pointer;
    background-color: var.$background-color;
  }
  img {
    display: block;
    width: 50px;
  }
}

.top-input,
.bot-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 90%;
}

.top-input {
  margin-top: 3%;
  margin-bottom: 5%;
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

    letter-spacing: 3px;
    font-size: 1.25em;
    resize: none;
    font-family: var.$body-font;
  }
}

.other-contact {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  .container-img-link {
    position: relative;

    img {
      cursor: pointer;
      width: 60px;
      z-index: 1;

      transition: all 0.5s ease-in-out;
    }

    a {
      position: absolute;
      white-space: nowrap;
      top: 50%;
      left: 50%;

      z-index: -1;
      opacity: 0;
      font-size: 1em;
      transform: translate(-50%, -50%);

      transition: all 0.5s ease-in-out 0.3s;
    }

    &:hover {
      img {
        opacity: 0;
        z-index: -1;
      }
      a {
        opacity: 1;
        font-size: 1.3em;
        z-index: 2;
      }
    }
  }
}
</style>
