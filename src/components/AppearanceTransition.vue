<template>
  <transition name="appearance">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppearanceTransition',
});
</script>

<style lang="scss">
.appearance-enter-active,
.appearance-leave-active {
  transition: all 0.5s ease-out;
}

.appearance-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.appearance-leave-to {
  display: none;
}
</style>
