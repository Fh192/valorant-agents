<template>
  <header class="header">
    <AgentPageHeaderBackground />

    <div class="container">
      <AgentDetails
        :role-display-name="roleDisplayName"
        :role-display-icon="roleDisplayIcon"
        :biography="biography"
      />
      <AgentFullPortrait :portrait="agentFullPortrait" />
      <img class="background" :src="background" alt="" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgentFullPortrait from './AgentFullPortrait.vue';
import AgentDetails from './AgentDetails.vue';
import AgentPageHeaderBackground from './AgentPageHeaderBackground.vue';

export default defineComponent({
  name: 'AgentPageHeader',
  components: { AgentFullPortrait, AgentDetails, AgentPageHeaderBackground },
  props: {
    agentFullPortrait: { type: String, required: true },
    roleDisplayName: { type: String, required: true },
    roleDisplayIcon: { type: String, required: true },
    biography: { type: String, required: true },
    background: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  color: #ece8e1;
  background-color: rgba(15, 25, 35, 0.5);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 30px;
  margin: 0 auto;
  height: 640px;
}

.background {
  height: 100%;
}
</style>
