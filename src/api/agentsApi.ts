import { Agent } from '../types/agent';
import { Language } from '../types/common';
import { api, ServerResponse } from './instance';

export const agentsApi = {
  getAllAgents: async (language: Language = 'en-US'): Promise<Agent[]> => {
    const response = await api.get<ServerResponse<Agent[]>>(
      `agents?isPlayableCharacter=true&language=${language}`
    );
    const { status, error, data: agents } = response.data;

    if (status !== 200) {
      throw new Error(error);
    }

    return agents;
  },

  getAgentByUuid: async (uuid: string, language: Language = 'en-US'): Promise<Agent> => {
    const response = await api.get<ServerResponse<Agent>>(`agents/${uuid}?language=${language}`);
    const { status, error, data: agent } = response.data;

    if (status !== 200) {
      throw new Error(error);
    }

    return agent;
  },
};
