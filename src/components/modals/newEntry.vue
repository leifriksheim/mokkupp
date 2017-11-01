<template lang="html">

  <Modal :title="`Legg til en ny ${contentType}`" :toggleModal="toggleModal">
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
    contentType: String,
  },
  components: { Modal },
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addEntry(title) {
      const camelTitle = this.camelize(title);
      db.ref(this.$root.userName + '/' + this.contentType + '/' + camelTitle).set(false);
    },
    addAndClose() {
      const camelCaseTitle = this.camelize(this.title);
      this.addEntry(camelCaseTitle);
      this.toggleModal();
    },
  }
}
</script>
