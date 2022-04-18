<template>
  <div class="abilityVideoWrapper">
    <video class="abilityVideo" :src="video" autoplay muted preload loop>
      <source :src="video" type="video/mp4" />
    </video>
    <span class="noVideoMessage" v-if="!video">Video is not available for this ability</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'AgentAbilityVideo',
  setup() {
    const { state } = useStore();
    const video = computed(() => state.activeAbility.video);

    return { video };
  },
});
</script>

<style lang="scss" scoped>
.abilityVideoWrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 380px;
  max-width: 675px;
  width: 100%;
  height: 100%;
  background-color: #0f1923;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    right: 0;
    width: 95%;
    height: 25px;
    background-color: #8b978f;
  }

  @media screen and (max-width: 1000px) {
    max-height: unset;
    max-width: unset;

    &::after {
      bottom: -15px;
      height: 15px;
    }
  }

  @media screen and (max-width: 700px) {
    width: calc(100% + 60px);
  }

  @media screen and (max-width: 435px) {
    width: calc(100% + 20px);
  }
}

.abilityVideo {
  max-height: 380px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1000px) {
    max-height: unset;
  }
}

.noVideoMessage {
  position: absolute;
  color: #ece8e1;
  font-size: 20px;
  text-align: center;
}
</style>
