<template>
  <div class="agentPage">
    <AgentPageHeader
      :agent-full-portrait="agent.fullPortraitV2"
      :role-display-icon="agent.role.displayIcon"
      :role-display-name="agent.role.displayName"
      :biography="agent.description"
      :background="agent.background"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { agentsApi } from '../api/agentsApi';
import { Agent } from '../types/agent';
import AgentPageHeader from '../components/AgentPageHeader.vue';

export default defineComponent({
  name: 'AgentPage',
  components: { AgentPageHeader },
  props: { uuid: { type: String, required: true } },
  setup(props) {
    const agent = ref<Agent>({
      uuid: '',
      displayName: '',
      fullPortraitV2: '',
      description: '',
      role: {
        displayIcon: '',
        displayName: '',
      },
      displayIcon: '',
      background: '',
      abilities: [
        {
          displayName: '',
          description: '',
          displayIcon: '',
        },
      ],
    });

    const fetchAgent = async () => {
      const response = await agentsApi.getAgentByUuid(props.uuid);
      agent.value = response;
    };

    onMounted(() => {
      fetchAgent();
    });

    return { agent };
  },
});
</script>

<style lang="scss" scoped>
.agentPage {
  min-height: 100vh;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
