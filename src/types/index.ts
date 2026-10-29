export interface Team {
  id: number;
  name: string;
  shortName: string;
  crest: string;
}

export interface Match {
  id: number;
  utcDate: string;
  status: 'SCHEDULED' | 'FINISHED' | 'IN_PLAY' | 'PAUSED';
  homeTeam: Team;
  awayTeam: Team;
  score: {
    fullTime: {
      home: number | null;
      away: number | null;
    }
  };
  competition: {
    name: string;
    emblem: string;
  };
}

export interface Standing {
  position: number;
  team: Team;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}