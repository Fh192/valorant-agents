<template>
  <div class="agents">
    <h1 class="title">SELECT AN AGENT!</h1>
    <AgentsList />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AgentsList from '../components/AgentsList.vue';

export default defineComponent({
  name: 'AgentsPage',
  components: { AgentsList },
});
</script>

<style lang="scss" scoped>
.agents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background: #101822;
  padding: 50px 0;
}

.title {
  font-family: 'Valorant-Font';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 110%;
  color: #ffffff;
  text-align: center;
}
</style>
