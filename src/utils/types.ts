export interface SubMenu {
  title: string;
  url: string;
}

export interface NavLink {
  title: string;
  url: string;
  submenu?: SubMenu[];
}

export type Rank = {
  1: string;
  2: string;
  3: string;
  [key: number]: string; // Add this line
};

export interface Streaming {
  channelID: string;
  brand: string;
}

export type RankingTabs = "clans" | "individuals" | "ladder" | "history";

export interface Winner {
  username: string;
  pfp: string;
  pts: number;
  rank: {
    type: string;
    rank: 1 | 2 | 3;
  };
}

export interface Player {
  id: string;
  rank: number;
  username: string;
  type: {
    name: string;
    rank?: number;
  };
  emblem: string | undefined | null; //pfp image
  role: string;
  playCount: {
    win: number;
    loss: number;
    winRate: number;
  };
  points: number;
}

export interface IndividualsPlayer {
  id: string;
  rank: number;
  username: string;
  level: number;
  experience: number;
  playCount: {
    kills: number;
    deaths: number;
  };
  points: number;
}

export interface LadderPlayer {
  id: string;
  rank: number;
  username: string;
  playCount: {
    win: number;
    lose: number;
  };
  winRate: number;
  points: number;
}
