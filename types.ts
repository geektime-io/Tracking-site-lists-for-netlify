export enum Region {
  ALL = 'All Regions',
  GLOBAL = 'Global',
  NORTH_AMERICA = 'North America',
  EUROPE = 'Europe',
  ASIA = 'Asia',
  LATAM = 'Latin America',
  MIDDLE_EAST = 'Middle East',
  OCEANIA = 'Oceania',
  AFRICA = 'Africa'
}

export interface Carrier {
  id: string;
  name: string;
  url: string;
  urls?: string[]; // Additional tracking URLs when multiple are available
  description: string;
  region: Region;
  flag: string; // Emoji flag representation
  icon?: string;
  tags: string[];
}