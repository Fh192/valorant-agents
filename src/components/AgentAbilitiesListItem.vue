<template>
  <li :class="['ability', { active }]" @click="setActiveAbility">
    <img class="abilityIcon" :src="ability.displayIcon" alt="" />
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useStore } from '../store';
import { Ability, ActiveAbility } from '../types/agent';

export default defineComponent({
  name: 'AgentAbilitiesListItem',
  props: {
    ability: { type: Object as PropType<Ability>, required: true },
    id: { type: Number, required: true },
  },
  setup(props) {
    const { getters, commit } = useStore();
    const active = computed(() => getters.isAbilityActive(props.id));

    const setActiveAbility = () => {
      const video = getters.abilityVideo(props.id);
      const activeAbility: ActiveAbility = { ...props.ability, id: props.id, video };
      commit('SET_ACTIVE_ABILITY', activeAbility);
    };

    return { active, setActiveAbility };
  },
});
</script>

<style lang="scss" scoped>
.ability {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px solid #bdbcb7;
  overflow: hidden;
  cursor: pointer;
  transition: all 1s ease-out;
  z-index: 1;
  background: #ece8e1;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 120%;
    transform: translateX(-100%) skew(-10deg);
    background-color: #ff4655;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    &::before {
      transform: translateX(0%) skew(-10deg);
    }

    .abilityIcon {
      filter: brightness(1);
    }
  }

  &.active {
    border-color: #0f1923;

    .abilityIcon {
      filter: brightness(0);
    }
    &:hover {
      &::before {
        transform: translateX(-100%) skew(-10deg);
      }
    }
  }

  @media screen and (max-width: 330px) {
    width: 60px;
    height: 60px;
  }
}

.abilityIcon {
  width: 50px;
  height: 50px;
  filter: brightness(0.6);

  @media screen and (max-width: 330px) {
    width: 40px;
    height: 40px;
  }
}
</style>
