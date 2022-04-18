<template>
  <ul class="agentsList">
    <AgentsListItem
      v-for="agent in agents"
      :key="agent.uuid"
      :display-icon="agent.displayIcon"
      :display-name="agent.displayName"
      :uuid="agent.uuid"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import AgentsListItem from './AgentsListItem.vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'AgentsList',
  components: { AgentsListItem },
  setup() {
    const { state, dispatch } = useStore();
    const agents = computed(() => state.agents);
    const hasAgents = computed(() => agents.value.length > 0);

    onMounted(() => {
      if (!hasAgents.value) {
        dispatch('GET_AGENTS');
      }
    });

    return { agents };
  },
});
</script>

<style lang="scss" scoped>
.agentsList {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px 100px;
  max-width: 1200px;
  width: 100%;

  @media screen and (max-width: 700px) {
    gap: 30px 60px;
  }
}
</style>
