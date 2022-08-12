<template>
  <header class="header">
    <agent-page-header-background />
    <div class="container">
      <div class="details">
        <agent-details />
      </div>
      <agent-full-portrait />
      <img class="background" alt="" :src="background" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '../store';
import AgentFullPortrait from './AgentFullPortrait.vue';
import AgentDetails from './AgentDetails.vue';
import AgentPageHeaderBackground from './AgentPageHeaderBackground.vue';

export default defineComponent({
  name: 'AgentPageHeader',
  components: { AgentFullPortrait, AgentDetails, AgentPageHeaderBackground },
  setup() {
    const { state } = useStore();
    const background = computed(() => state.agent.background);

    return { background };
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  color: #ece8e1;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 640px;
  padding: 30px;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    height: 500px;
  }
}

.details {
  position: relative;
  width: 30%;
  z-index: 2;
  border-bottom: 1px solid #bdbcb7;
  padding-bottom: 60px;

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    width: 10px;
    height: 10px;
    background: #bdbcb7;
  }

  @media screen and (max-width: 1000px) {
    width: 40%;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
}

.background {
  height: 100%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
}
</style>
