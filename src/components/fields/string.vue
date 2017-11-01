<style lang="scss">

.tag {
  font-size: 0.6rem;
  border-radius: 300px;
  padding: 4px $spacing-small;
  margin-left: $spacing-small;
  background: $color-gray--light;
}

</style>

<template lang="html">

  <label>
  <span class="h4">{{label}}</span><span class="tag">tekst</span>
  <input class="input" :value="value" type="text" @input="updateValue(label, $event.target.value)" />
  </label>

</template>

<script>

export default {
  props: {
    label: String,
    value: String,
    updateValue: Function,
  }
}

</script>
