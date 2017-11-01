import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.mixin({
  methods: {
    camelize(string) {
      return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
      }).replace(/[^A-Z]+/ig, "");
    },
  },
});

new Vue({
  el: '#app',
  router: router,
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var userName = email.split('@')[0]
        var uid = user.uid;
        this.userName = userName;
        console.log('logged in');
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/');
      }
    });
  },
  data: {
    userName: null,
  },
  render: h => h(App)
})
