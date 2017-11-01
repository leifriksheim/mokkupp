<style lang="scss">

@import './styles/sanitize.scss';
@import './styles/body.scss';
@import './styles/typography.scss';
@import './styles/containers.scss';
@import './styles/grid.scss';
@import './styles/blocks.scss';
@import './styles/input.scss';
@import './styles/button.scss';
@import './styles/select.scss';
@import './styles/modal.scss';
@import './styles/list.scss';
@import './styles/utils.scss';

</style>

<template>
  <div id="app">
    <main>
      <router-view :key="$route.path"></router-view>
    </main>
  </div>
</template>
