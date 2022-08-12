import { Agent } from '../types/agent';
import { Language } from '../types/common';
import { api, ServerResponse } from './instance';

export const agentsApi = {
  getAllAgents: async (language: Language = 'en-US'): Promise<Agent[]> => {
    try {
      const { data } = await api.get<ServerResponse<Agent[]>>(
        `agents?isPlayableCharacter=true&language=${language}`
      );
      const { data: agents } = data;

      return agents;
    } catch (err) {
      console.error(err);
      return [];
    }
  },

  getAgentByUuid: async (uuid: string, language: Language = 'en-US'): Promise<Agent> => {
    try {
      const { data } = await api.get<ServerResponse<Agent>>(`agents/${uuid}?language=${language}`);
      const { data: agent } = data;

      return agent;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
