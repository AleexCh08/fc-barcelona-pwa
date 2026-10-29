import { useQuery } from '@tanstack/react-query';
import { getUpcomingMatches, getLastMatches, getStandings } from '../services/api';

export const useUpcomingMatches = () => useQuery({
  queryKey: ['upcomingMatches'],
  queryFn: getUpcomingMatches
});

export const useLastMatches = () => useQuery({
  queryKey: ['lastMatches'],
  queryFn: getLastMatches
});

export const useStandings = (comp: 'PD' | 'CL') => useQuery({
  queryKey: ['standings', comp],
  queryFn: () => getStandings(comp)
});