<template>
  <div class="agentRole">
    <h3 class="label">// Role</h3>
    <div class="role">
      <AppearanceTransition>
        <h2 class="title" :key="title">{{ title }}</h2>
      </AppearanceTransition>
      <AppearanceTransition>
        <img class="icon" :src="icon" :key="icon" v-if="icon" alt="" />
      </AppearanceTransition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../store';
import AppearanceTransition from './AppearanceTransition.vue';

export default defineComponent({
  name: 'AgentDetailsRole',
  components: { AppearanceTransition },
  setup() {
    const { state } = useStore();
    const title = computed(() => state.agent.role.displayName);
    const icon = computed(() => state.agent.role.displayIcon);

    return { title, icon };
  },
});
</script>

<style lang="scss" scoped>
.agentRole {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.label {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  color: #383e3a;

  @media screen and (min-width: 700px) {
    color: #ece8e1;
  }
}

.role {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.title {
  font-family: 'Tungsten-Bold';
  text-transform: uppercase;
  font-size: 64px;
}

.icon {
  width: 30px;
  height: 30px;

  @media screen and (max-width: 700px) {
    filter: brightness(0.06);
  }
}
</style>
