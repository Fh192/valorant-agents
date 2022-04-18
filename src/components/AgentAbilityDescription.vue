<template>
  <div class="wrapper">
    <AppearanceTransition>
      <h3 class="title" :key="name">{{ name }}</h3>
    </AppearanceTransition>
    <AppearanceTransition>
      <p class="description" :key="description">{{ description }}</p>
    </AppearanceTransition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../store';
import AppearanceTransition from './AppearanceTransition.vue';

export default defineComponent({
  name: 'AgentAbilityDescription',
  components: { AppearanceTransition },
  setup() {
    const { state } = useStore();
    const name = computed(() => state.activeAbility.displayName);
    const description = computed(() => state.activeAbility.description);

    return { name, description };
  },
});
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 65%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
}

.title {
  font-size: 25px;
  color: #383e3a;
}

.description {
  line-height: 1.5;
  color: #768079;
}
</style>
