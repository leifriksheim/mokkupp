<style lang="scss">

.sidebar {
  position: fixed;
  left: 0;
  bottom: 0;
  background: $color-white;
  border-right: 2px solid $color-gray--light;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;

  &__inner {
    width: 300px;
    padding: $spacing;
  }

  &__items {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: $spacing-smaller;
  }

  &__item-content {
    flex-grow: 1;
    padding: $spacing-smaller;
    border-radius: $border-radius;
    border: 1px solid $color-gray;
    cursor: pointer;

    &:hover {
      border-color: $color-primary;
    }
  }

  &__item-content.router-link-active {
    border: 2px solid $color-primary;
    background: $color-gray--light;
    color: $color-primary;
  }

  &__item-delete {
    display: inline;
    font-size: 0.7rem;
    line-height: 1.3rem;
    margin-left: $spacing-smaller;
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

  <aside class="sidebar">
    <div class="sidebar__inner">
      <h3>Innholdstyper</h3>
      <ul class="sidebar__items">
        <li class="sidebar__item" v-for="contentTypes, name in data">
          <router-link
            tag="li"
            class="sidebar__item-content"
            :key="name"
            :to="'/dashboard/' + name">
              {{name}}
          </router-link>
          <span class="sidebar__item-delete" @click="deleteContentType(name)">&#10005;</span>
        </li>
      </ul>
      <button class="button --primary --small --full" @click="toggleModal">+ Ny innholdstype</button>
      <ModalNewContentType
        v-if="showModal"
        :toggleModal="toggleModal.bind(this)"
      />
    </div>
  </aside>

</template>

<script>

import { db } from '../../firebase';
import ModalNewContentType from '../modals/newContentType.vue';

export default {
  components: {
    ModalNewContentType
  },
  props: {
    data: Object,
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
    deleteContentType(contentType) {
      db.ref(this.$root.userName + '/' + contentType).remove();
    }
  }
}
</script>
