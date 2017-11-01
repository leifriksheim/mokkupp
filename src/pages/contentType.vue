<template lang="html">

  <div class="container block --full --mt-largest --mb-largest">

    <Entry
      v-for="entry, name in data[contentType]"
      :entry="entry"
      :contentType="contentType"
      :entryName="name"
      :key="name"
    />

    <button class="button --full --big --primary" @click="toggleModal">
      + Nytt objekt
    </button>

    <ModalNewEntry
      v-if="showModal"
      :contentType="contentType"
      :toggleModal="toggleModal.bind(this)"
    />

  </div>

</template>

<script>

import Entry from '../components/cards/entry.vue';
import ModalNewEntry from '../components/modals/newEntry.vue';

export default {
  props: {
    data: Object,
  },
  components: {
    Entry,
    ModalNewEntry,
  },
  data() {
    return {
      showModal: false,
      contentType: this.$route.params.contentType,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
}
</script>

<style lang="css">
</style>
