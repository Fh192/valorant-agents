<template>
  <div class="agentPage">
    <AgentPageHeader />
    <div class="container">
      <div class="content">
        <div class="details">
          <AgentDetails />
        </div>
        <AgentAbilities />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import AgentPageHeader from '../components/AgentPageHeader.vue';
import AgentAbilities from '../components/AgentAbilities.vue';
import AgentDetails from '../components/AgentDetails.vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'AgentPage',
  components: { AgentPageHeader, AgentAbilities, AgentDetails },
  props: { uuid: { type: String, required: true } },
  setup(props) {
    const { state, getters, dispatch, commit } = useStore();
    const agent = computed(() => state.agent);
    const abilities = computed(() => getters.abilities);

    onMounted(() => {
      commit('RESET_AGENT');
      dispatch('GET_AGENT', props.uuid).then(() => {
        document.title = `VALORANT Agents: ${agent.value.displayName}`;
      });
    });

    return { agent, abilities };
  },
});
</script>

<style lang="scss" scoped>
.agentPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 15px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 435px) {
    padding: 0 10px;
  }
}

.content {
  padding: 150px 0 100px 30px;
  border-left: 1px solid rgba(9, 9, 9, 0.4);
  border-right: 1px solid rgba(9, 9, 9, 0.4);

  @media screen and (max-width: 1000px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding-top: 100px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 435px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}

.details {
  position: relative;
  display: none;

  @media screen and (max-width: 700px) {
    display: block;

    &::after {
      content: '';
      position: absolute;
      bottom: -30px;
      left: -30px;
      background: rgba(9, 9, 9, 0.4);
      height: 1px;
      width: calc(100% + 60px);

      @media screen and (max-width: 435px) {
        width: calc(100% + 20px);
        left: -10px;
      }
    }
  }
}
</style>
