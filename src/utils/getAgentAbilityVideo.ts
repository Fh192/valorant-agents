import agents, { AgentsAbilitiesVideos } from '../assets/agentsAbilitiesVideos';

export const getAgentAbilityVideo = (agentName: string) => {
  const { videos } = agents.find(({ name }) => name === agentName) as AgentsAbilitiesVideos;
  return videos;
};
