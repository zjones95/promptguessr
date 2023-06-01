export interface Player {
  id: number;
  name: string;
}

export interface Game {
  id: string;
  ownerName: string;
  players: Player[];
  maxPlayers: number;
}
