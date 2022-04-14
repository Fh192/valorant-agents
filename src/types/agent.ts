export interface Role {
  displayName: string;
  displayIcon: string;
}

export interface Ability {
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortraitV2: string;
  background: string;
  role: Role;
  abilities: Ability[];
}
