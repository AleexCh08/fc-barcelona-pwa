import type { Match, Standing } from '../types';

const fetchProxy = async (action: string) => {
  const res = await fetch(`/.netlify/functions/barca?action=${action}`);
  if (!res.ok) throw new Error('Error en la petición de red');
  return res.json();
};

export const getNextMatch = async (): Promise<Match | null> => {
  const data = await fetchProxy('next_match');
  return data.matches?.[0] || null;
};

export const getLastMatches = async (): Promise<Match[]> => {
  const data = await fetchProxy('last_matches');
  return data.matches?.reverse() || [];
};

export const getStandings = async (): Promise<Standing[]> => {
  const data = await fetchProxy('standings');
  return data.standings?.[0]?.table || [];
};