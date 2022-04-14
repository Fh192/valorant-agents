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
import { defineComponent, ref, onMounted } from 'vue';
import { Agent } from '../types/agent';
import { agentsApi } from '../api/agentsApi';
import AgentsListItem from './AgentsListItem.vue';

export default defineComponent({
  name: 'AgentsList',
  components: { AgentsListItem },
  setup() {
    const agents = ref<Agent[]>([]);

    const fetchAgents = async () => {
      const response = await agentsApi.getAllAgents();
      agents.value = response;
    };

    onMounted(() => {
      fetchAgents();
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
}
</style>
