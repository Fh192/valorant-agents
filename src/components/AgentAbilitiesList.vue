<template>
  <ul class="abilities">
    <AgentAbilitiesListItem
      v-for="(ability, index) in abilities"
      :key="ability.displayName"
      :ability="ability"
      :id="index"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from '../store';
import { Ability } from '../types/agent';
import AgentAbilitiesListItem from './AgentAbilitiesListItem.vue';

export default defineComponent({
  name: 'AgentAbilitiesList',
  components: { AgentAbilitiesListItem },
  setup() {
    const { getters, commit } = useStore();
    const abilities = computed<Ability[]>(() => getters.abilities);

    onMounted(() => {
      commit('SET_ACTIVE_ABILITY', {
        ...abilities.value[0],
        id: 0,
        video: '',
      });
    });

    return { abilities };
  },
});
</script>

<style lang="scss" scoped>
.abilities {
  position: relative;
  display: flex;
  gap: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -30px;
    background: rgba(9, 9, 9, 0.4);
    height: 1px;
    width: 120%;

    @media screen and (max-width: 1000px) {
      width: calc(100% + 30px * 2);
    }

    @media screen and (max-width: 435px) {
      width: calc(100% + 20px);
      left: -10px;
    }
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }

  @media screen and (max-width: 435px) {
    justify-content: space-between;
    gap: 0;
  }
}
</style>
