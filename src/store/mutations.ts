import { MutationTree } from 'vuex';
import { ActiveAbility, Agent } from '../types/agent';
import { State } from './state';

export enum MutationTypes {
  SET_AGENT = 'SET_AGENT',
  SET_AGENTS = 'SET_AGENTS',
  SET_ACTIVE_ABILITY = 'SET_ACTIVE_ABILITY',
  RESET_AGENT = 'RESET_AGENT',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_AGENT](state: S, payload: Agent): void;
  [MutationTypes.SET_AGENTS](state: S, payload: Agent[]): void;
  [MutationTypes.SET_ACTIVE_ABILITY](state: S, payload: ActiveAbility): void;
  [MutationTypes.RESET_AGENT](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_AGENT](state, payload) {
    state.agent = payload;
  },
  [MutationTypes.SET_AGENTS](state, payload) {
    state.agents = payload;
  },
  [MutationTypes.SET_ACTIVE_ABILITY](state, payload: ActiveAbility) {
    state.activeAbility = payload;
  },
  [MutationTypes.RESET_AGENT](state) {
    state.agent = {
      uuid: '',
      displayName: '',
      fullPortrait: '',
      description: '',
      displayIcon: '',
      background: '',
      abilities: [],
      role: {
        displayIcon: '',
        displayName: '',
      },
    };
  },
};
