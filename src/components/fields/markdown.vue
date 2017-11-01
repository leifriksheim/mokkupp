<style lang="scss">

.markdown {
  min-height: 150px;
}

.tag {
  font-size: 0.6rem;
  float: right;
  border-radius: 300px;
  padding: 4px $spacing-small;
  margin-left: $spacing-small;
  background: $color-gray--light;
}

</style>

<template lang="html">

  <label>
  <span class="h4">{{label}}</span><span class="tag">markdown</span>
  <textarea class="markdown input" :value="value" @input="updateValue(label, $event.target.value)">
  </textarea>
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
