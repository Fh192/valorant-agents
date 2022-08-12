<template>
  <div class="wrapper">
    <appearance-transition>
      <h3 class="title" :key="name" v-text="name" />
    </appearance-transition>
    <appearance-transition>
      <p class="description" :key="description" v-text="description" />
    </appearance-transition>
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
