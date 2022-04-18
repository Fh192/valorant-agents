import { ActionContext, ActionTree } from 'vuex';
import { agentsApi } from '../api/agentsApi';
import { ActiveAbility } from '../types/agent';
import { Mutations, MutationTypes } from './mutations';
import { State } from './state';

export enum ActionTypes {
  GET_AGENT = 'GET_AGENT',
  GET_AGENTS = 'GET_AGENTS',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.GET_AGENT]({ commit }: AugmentedActionContext, payload: string): void;
  [ActionTypes.GET_AGENTS]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_AGENT]({ commit, getters }, uuid) {
    const agent = await agentsApi.getAgentByUuid(uuid);
    commit(MutationTypes.SET_AGENT, agent);

    const activeAbility: ActiveAbility = {
      ...getters.abilities[0],
      id: 0,
      video: getters.abilityVideo(0),
    };
    commit(MutationTypes.SET_ACTIVE_ABILITY, activeAbility);
  },

  async [ActionTypes.GET_AGENTS]({ commit }) {
    const agents = await agentsApi.getAllAgents();
    commit(MutationTypes.SET_AGENTS, agents);
  },
};
