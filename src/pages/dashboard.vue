<style lang="scss">

.logout {
  position: absolute;
  right: 10px;
  top: 10px;
}

</style>

<template lang="html">

<div>
  <button class="logout button --outline --primary" @click="logOut">Logg ut</button>
  <SideBar :data="data" />
  <router-view :key="$route.path" :data="data"></router-view>
</div>

</template>

<script>

import {db} from '../firebase';
import SideBar from '../components/navigation/sidebar.vue';

export default {
  name: 'app',
  components: {
    SideBar,
  },
  mounted() {
    db.ref(this.$root.userName).on('value', (snapshot) => {
      const data = snapshot.val();
      if(data) {
        this.data = data
      }
      else {
        this.data = {};
        this.$router.push('/dashboard');
      };
    });
  },
  data() {
    return {
      showContentModal: false,
      data: {},
    };
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    }
  }
}
</script>
