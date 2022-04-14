<template>
  <video
    class="backgroundVideo"
    poster="../assets/agent-background.jpg"
    autoplay
    muted
    preload
    loop
  >
    <source src="../assets/agent-background.mp4" type="video/mp4" />
  </video>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AgentPageHeaderBackground',
});
</script>

<style lang="scss" scoped>
.backgroundVideo {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  object-fit: cover;
  height: 100%;
}
</style>
