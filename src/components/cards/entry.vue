<style lang="scss">

.entry__heading {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: $spacing;
}

.entry__delete {
  display: inline;
  font-size: 0.7rem;
  line-height: 1.3rem;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: $color-gray;
    transform: scale(1.2);
  }
}

.entry__field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing;

  &-item {
    flex-grow: 1;
  }

  &-delete {
    display: inline;
    margin-left: $spacing;
    margin-top: $spacing;
    margin-right: $spacing;
    font-size: 0.7rem;
    line-height: 1.3rem;
    border-radius: 50%;
    width: 1.3rem;
    height: 1.3rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: $color-gray;
      transform: scale(1.2);
    }
  }
}

</style>

<template lang="html">

  <div class="block --border --pb-larger --pt-large --mb">

    <div class="block --full --mb">
      <small>https://mokkupp.firebaseio.com/{{$root.userName}}/{{contentType}}/{{entryName}}</small>
    </div>

    <div class="entry__heading">
      <div class="entry__title">
        <h2>{{entryName}}</h2>
      </div>
      <div class="entry__delete" @click="deleteEntry">
        &#10005;
      </div>
    </div>

    <div class="entry__field" v-for="field, fieldName in entry" v-if="field" :key="fieldName">
      <div class="entry__field-item">
        <String
          v-if="field.type === 'string'"
          :label="fieldName"
          :value="field.value"
          :updateValue="updateField.bind(this)"
        />
        <MarkDown
          v-if="field.type === 'markdown'"
          :label="fieldName"
          :value="field.value"
          :updateValue="updateField.bind(this)"
        />
      </div>
      <div class="entry__field-delete" @click="deleteField(fieldName)">
        &#10005;
      </div>
    </div>

    <div class="block --full --mt">
      <button class="button --full --dashed" @click="toggleModal">+ Legg til nytt felt</button>
    </div>

    <ModalNewField
      v-if="showModal"
      :entryName="entryName"
      :contentType="contentType"
      :toggleModal="toggleModal.bind(this)"
      :addField="addField"
    />
  </div>

</template>

<script>

import { db } from '../../firebase';
import ModalNewField from '../modals/newField.vue';
import String from '../fields/string.vue';
import MarkDown from '../fields/markdown.vue';

export default {
  props: {
    entry: Object,
    entryName: String,
    contentType: String,
    addField: Function,
  },
  components: {
    ModalNewField,
    String,
    MarkDown,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    deleteEntry() {
      db.ref(this.$root.userName + '/' + this.contentType + '/' + this.entryName).remove();
    },
    deleteField(fieldName) {
      db.ref(this.$root.userName + '/' + this.contentType + '/' + this.entryName + '/' + fieldName).remove();
    },
    updateField(fieldName, value) {
      if(value) {
        db.ref(this.$root.userName + '/' + this.contentType + '/' + this.entryName + '/' + fieldName + '/value').set(value);
      }
    }
  }
}
</script>
