<template>
  <div class="agentAbilities">
    <div class="inner">
      <h2 class="label" v-text="'Special Abilities'" />
      <agent-abilities-list />
      <agent-ability-description />
    </div>
    <agent-ability-video />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgentAbilitiesList from './AgentAbilitiesList.vue';
import AgentAbilityVideo from './AgentAbilityVideo.vue';
import AgentAbilityDescription from './AgentAbilityDescription.vue';

export default defineComponent({
  name: 'AgentAbilities',
  components: { AgentAbilitiesList, AgentAbilityVideo, AgentAbilityDescription },
});
</script>

<style lang="scss" scoped>
.agentAbilities {
  position: relative;
  display: flex;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
}

.label {
  font-family: 'Tungsten-Bold';
  text-transform: uppercase;
  font-size: 64px;

  @media screen and (max-width: 435px) {
    font-size: 45px;
  }
}

.inner {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 60%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
}
</style>
