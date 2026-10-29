import React from 'react';
import type { Match } from '../../types';
import { SectionLabel } from '../ui/SectionLabel';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const date = new Date(match.utcDate);
  const formattedDate = date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  const formattedTime = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="border border-carbon-ink rounded-card p-6 bg-summit-white">
      <SectionLabel text={match.competition.name} />
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-4 w-1/3">
          <img src={match.homeTeam.crest} alt={match.homeTeam.name} className="w-12 h-12 object-contain" />
          <span className="font-display font-semibold text-[26px] hidden sm:block">{match.homeTeam.shortName}</span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-1/3 text-center">
          {match.status === 'FINISHED' ? (
            <div className="font-display font-semibold text-[48px] leading-none tracking-tight">
              {match.score.fullTime.home} - {match.score.fullTime.away}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <span className="font-display font-semibold text-[26px] text-signal-red">{formattedTime}</span>
              <span className="text-[14px] text-ridge-gray mt-1 capitalize font-mono tracking-tight">{formattedDate}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-4 w-1/3">
          <span className="font-display font-semibold text-[26px] hidden sm:block">{match.awayTeam.shortName}</span>
          <img src={match.awayTeam.crest} alt={match.awayTeam.name} className="w-12 h-12 object-contain" />
        </div>
      </div>
    </div>
  );
};