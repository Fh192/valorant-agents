<template>
  <div class="agentDetails">
    <AgentDetailsRole :display-icon="roleDisplayIcon" :display-name="roleDisplayName" />
    <AgentDetailsBiography :biography="biography" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgentDetailsBiography from './AgentDetailsBiography.vue';
import AgentDetailsRole from './AgentDetailsRole.vue';

export default defineComponent({
  name: 'AgentDetails',
  components: { AgentDetailsRole, AgentDetailsBiography },
  props: {
    roleDisplayIcon: { type: String, required: true },
    roleDisplayName: { type: String, required: true },
    biography: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.agentDetails {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 27%;
  padding-bottom: 60px;
  border-bottom: 1px solid #bdbcb7;

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    width: 10px;
    height: 10px;
    background: #bdbcb7;
  }
}
</style>
