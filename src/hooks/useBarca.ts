import { useQuery } from '@tanstack/react-query';
import { getNextMatch, getLastMatches, getStandings } from '../services/api';

export const useNextMatch = () => useQuery({
  queryKey: ['nextMatch'],
  queryFn: getNextMatch
});

export const useLastMatches = () => useQuery({
  queryKey: ['lastMatches'],
  queryFn: getLastMatches
});

export const useStandings = () => useQuery({
  queryKey: ['standings'],
  queryFn: getStandings
});