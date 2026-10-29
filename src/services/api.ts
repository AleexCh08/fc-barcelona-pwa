import type { Match, Standing } from '../types';

const fetchProxy = async (action: string, comp?: string) => {
  const query = comp ? `&comp=${comp}` : '';
  const res = await fetch(`/.netlify/functions/barca?action=${action}${query}`);
  if (!res.ok) throw new Error('Error en la petición de red');
  return res.json();
};

export const getUpcomingMatches = async (): Promise<Match[]> => {
  const data = await fetchProxy('upcoming_matches');
  return data.matches || [];
};

export const getLastMatches = async (): Promise<Match[]> => {
  const data = await fetchProxy('last_matches');
  return data.matches?.reverse() || [];
};

export const getStandings = async (comp: 'PD' | 'CL'): Promise<Standing[]> => {
  const data = await fetchProxy('standings', comp);
  
  if (comp === 'CL') {
    const group = data.standings?.find((g: any) => g.table.some((t: any) => t.team.id === 81));
    return group ? group.table : [];
  }
  
  return data.standings?.[0]?.table || [];
};