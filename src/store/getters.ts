import { GetterTree } from 'vuex';
import { Ability } from '../types/agent';
import { getAgentAbilityVideo } from '../utils/getAgentAbilityVideo';
import { State } from './state';

export type Getters = {
  abilities(state: State): Ability[];
  abilityVideo: (state: State) => (id: number) => string;
  isAbilityActive: (state: State) => (id: number) => boolean;
};

export const getters: GetterTree<State, State> & Getters = {
  abilities(state) {
    return state.agent.abilities
      .filter(({ displayIcon, slot }) => displayIcon && slot !== 'Passive')
      .sort((a, b) => a.slot.localeCompare(b.slot));
  },

  abilityVideo: (state) => (id) => {
    const agentName = state.agent.displayName.toLowerCase();
    return getAgentAbilityVideo(agentName)[id];
  },

  isAbilityActive: (state) => (id) => state.activeAbility.id === id,
};
