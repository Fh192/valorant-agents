export interface Role {
  displayName: string;
  displayIcon: string;
}

export interface Ability {
  displayName: string;
  description: string;
  displayIcon: string;
  slot: string;
}

export interface ActiveAbility extends Omit<Ability, 'slot'> {
  id: number;
  video: string;
}

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  background: string;
  role: Role;
  abilities: Ability[];
}

export type AgentName =
  | 'jett'
  | 'raze'
  | 'breach'
  | 'omen'
  | 'brimstone'
  | 'phoenix'
  | 'sage'
  | 'sova'
  | 'viper'
  | 'cypher'
  | 'reyna'
  | 'killjoy'
  | 'skye'
  | 'yoru'
  | 'astra'
  | 'kayo'
  | 'neon'
  | 'chamber';
