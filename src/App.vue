<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
#app {
  font-family: 'DINNextLTW04-Medium';
  font-size: 16px;
  background: #ece8e1;
  color: #0f1923;
  overflow-x: hidden;
}
</style>
