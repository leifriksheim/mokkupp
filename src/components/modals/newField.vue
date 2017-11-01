<template lang="html">

  <Modal title="Legg til et nytt felt" :toggleModal="toggleModal">
    <div slot="body">
      <label>
        Navn
        <input class="input" autofocus type="text" v-model="title" @keyup.enter="addAndClose" />
      </label>
      <label>
        Type
        <select class="select" v-model="type" @keyup.enter="addAndClose">
          <option value="string">Tekst</option>
          <option value="markdown">Markdown</option>
        </select>
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
    contentType: String,
    entryName: String,
    toggleModal: Function,
  },
  components: { Modal },
  data() {
    return {
      title: '',
      type: 'string',
    }
  },
  methods: {
    addAndClose() {
      const field = {type: this.type, value: ''};
      const camelTitle = this.camelize(this.title);
      db.ref(this.$root.userName + '/' + this.contentType + '/' + this.entryName + '/' + camelTitle).set(field);
      this.toggleModal();
    },
  }
}
</script>
