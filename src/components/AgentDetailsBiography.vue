<template>
  <div class="agentBiography">
    <h3 class="label" v-text="'// Biography'" />
    <appearance-transition>
      <p class="description" :key="biography" v-text="biography" />
    </appearance-transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../store';
import AppearanceTransition from './AppearanceTransition.vue';

export default defineComponent({
  name: 'AgentDetailsBiography',
  components: { AppearanceTransition },
  setup() {
    const { state } = useStore();
    const biography = computed(() => state.agent.description);

    return { biography };
  },
});
</script>

<style lang="scss" scoped>
.agentBiography {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'DINNextLTW04-Medium';
  font-weight: 400;
}

.label {
  text-transform: uppercase;
  color: #383e3a;

  @media screen and (min-width: 700px) {
    color: #ece8e1;
  }
}

.description {
  line-height: 1.5;
  color: #768079;

  @media screen and (min-width: 700px) {
    color: #ece8e1;
  }
}
</style>
