export interface Player {
  id: number;
  name: string;
}

export interface Image {
  id: number;
  url: string;
}

export interface Message {
  id: number;
  content: string;
}

export interface Game {
  id: number;
  slug: string;
  createdAt: string;
  host_name: string;
}
