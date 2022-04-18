<template>
  <div class="agentDetails">
    <AgentDetailsRole />
    <AgentDetailsBiography />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgentDetailsBiography from './AgentDetailsBiography.vue';
import AgentDetailsRole from './AgentDetailsRole.vue';

export default defineComponent({
  name: 'AgentDetails',
  components: { AgentDetailsRole, AgentDetailsBiography },
});
</script>

<style lang="scss" scoped>
.agentDetails {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
