<style lang="scss">

.tab {
  border: 1px solid $color-gray;

  &__heading {
    display: flex;
    border-bottom: 1px solid $color-gray;
  }

  &__title {
    flex-grow: 1;
    cursor: pointer;
    padding: $spacing;
    text-align: center;

    &:hover {
      border-bottom: 1px solid $color-primary;
    }

    &.active {
      font-weight: 800;
      border-bottom: 2px solid $color-primary;
    }
  }

  &__content {
    padding: $spacing;
    display: none;

    &.active {
      display: block;
    }
  }

}

</style>

<template lang="html">

  <main>
    <div class="container">

      <div class="block --mt-largest --text-center">
        <h3 class="--text-primary">Mokkupp</h3>
        <h1>Enkelt CMS for prototyping</h1>
      </div>

    </div>

    <div class="container --narrow">

      <div class="block --mt-largest">
        <div class="tab">

          <div class="tab__heading">
            <div class="tab__title" :class="{active: activeTab === 1}" @click="activeTab = 1">
              Logg inn
            </div>
            <div class="tab__title" :class="{active: activeTab === 2}" @click="activeTab = 2">
              Ny bruker
            </div>
          </div>

          <div class="tab__content" :class="{active: activeTab === 1}">
            <label>
              Brukernavn
              <input class="input" v-model="userName" />
            </label>
            <label>
              Passord
              <input class="input" type="password" v-model="password" @keyup.enter="logInUser" />
            </label>
            <button class="button --primary --full" @click="logInUser">Logg inn</button>
          </div>

          <div class="tab__content" :class="{active: activeTab === 2}">
            <label>
              Brukernavn
              <input class="input" v-model="userName" />
            </label>
            <label>
              Passord
              <input class="input" type="password" v-model="password" @keyup.enter="createUser" />
            </label>
            <button class="button --primary --full" @click="createUser">Lag bruker</button>
          </div>

        </div>
      </div>

    </div>


  </main>

</template>

<script>

import {root} from '../firebase';

export default {
  data() {
    return {
      activeTab: 1,
      userName: '',
      password: '',
    }
  },
  methods: {
    createUser() {
      const userName = this.userName;
      const password = this.password;
      const email = userName + '@mokkupp.com';
      firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    logInUser() {
      const userName = this.userName;
      const password = this.password;
      const email = userName + '@mokkupp.com';
      firebase.auth().signInWithEmailAndPassword(email, password);
    }
  }
}
</script>
