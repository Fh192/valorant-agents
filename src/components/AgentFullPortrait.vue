<template>
  <img
    v-if="portrait"
    alt="agent portrait"
    :class="['agentFullPortrait', { loaded }]"
    :src="portrait"
    @load="onLoad"
  />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'AgentFullPortrait',
  setup() {
    const { state } = useStore();
    const portrait = computed(() => state.agent.fullPortraitV2);
    const loaded = ref(false);

    const onLoad = () => {
      loaded.value = true;
    };

    return { portrait, loaded, onLoad };
  },
});
</script>

<style lang="scss" scoped>
.agentFullPortrait {
  display: none;
  height: 120%;
  position: absolute;
  top: -20px;
  right: 50%;
  transform: translate(50%, 0);
  z-index: 1;

  @media screen and (max-width: 1000px) {
    right: 20%;
    transform: translate(20%, 0);
  }

  @media screen and (max-width: 700px) {
    right: 50%;
    transform: translate(50%, 0);
  }
}
.loaded {
  display: block;
  animation: load 0.3s ease-out 0.4s 1 forwards;
  opacity: 0;
}

@keyframes load {
  0% {
    opacity: 0;
    transform: scale(0.7) translate(50%, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate(50%, 0);
  }
}
</style>
