<template lang="html">

  <transition name="modal-animation">
    <div class="modal">
      <div class="modal__container">
        <div class="modal__content">

          <div name="header" class="modal__header">
            <div class="modal__title"><h3>{{title}}</h3></div>
            <div class="modal__close" @click="toggleModal">&#10005;</div>
          </div>

          <slot name="body" class="modal__body">

          </slot>

          <slot name="footer" class="modal__footer">

          </slot>

        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  props: {
    toggleModal: Function,
    title: String,
  }
}
</script>

<style lang="css">
</style>
