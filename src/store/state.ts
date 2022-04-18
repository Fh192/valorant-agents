import { ActiveAbility, Agent } from '../types/agent';

export interface State {
  agent: Agent;
  agents: Agent[];
  activeAbility: ActiveAbility;
}

export const state = (): State => ({
  agent: {
    uuid: '',
    displayName: '',
    fullPortraitV2: '',
    description: '',
    displayIcon: '',
    background: '',
    abilities: [],
    role: {
      displayIcon: '',
      displayName: '',
    },
  },
  activeAbility: {
    id: 0,
    video: '',
    displayName: '',
    displayIcon: '',
    description: '',
  },
  agents: [],
});
