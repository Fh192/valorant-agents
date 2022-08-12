<template>
  <div class="wrapper">
    <video
      class="backgroundVideo"
      poster="../assets/agent-background.jpg"
      autoplay
      preload
      muted
      loop
    >
      <source src="../assets/agent-background.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AgentPageHeaderBackground',
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-color: #0f1923;
  }
}

.backgroundVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
