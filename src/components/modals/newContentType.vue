<template lang="html">

  <Modal title="Legg til en ny innholdstype" :toggleModal="toggleModal">
    <div slot="body">
      <label>
        Navn
        <input class="input" autofocus type="text" v-model="title" @keyup.enter="addAndClose" />
      </label>
    </div>
    <div slot="footer">
      <button class="button --primary --full" @click="addAndClose">Legg til</button>
    </div>
  </Modal>

</template>

<script>

import {db} from '../../firebase';
import Modal from './modal.vue';

export default {
  props: {
    toggleModal: Function,
  },
  components: { Modal },
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addContentType(title) {
      const camelTitle = this.camelize(title);
      db.ref(this.$root.userName + '/' + camelTitle).set(false);
    },
    addAndClose() {
      this.addContentType(this.title);
      this.toggleModal();
      this.$router.push('/dashboard/' + this.title);
    },
  }
}
</script>
