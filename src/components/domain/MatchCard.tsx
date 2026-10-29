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
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:gap-8 items-center mt-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-end">
          <span className="font-display font-semibold text-[14px] sm:text-[18px] lg:text-[20px] text-center md:text-right leading-tight text-balance order-2 md:order-1">
            {match.homeTeam.shortName}
          </span>
          <img src={match.homeTeam.crest} alt={match.homeTeam.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 order-1 md:order-2" />
        </div>
        
        <div className="flex flex-col items-center justify-center px-2 min-w-20">
          {match.status === 'FINISHED' ? (
            <div className="font-display font-semibold text-[32px] sm:text-[48px] leading-none tracking-tight whitespace-nowrap">
              {match.score.fullTime.home} - {match.score.fullTime.away}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <span className="font-display font-semibold text-[20px] sm:text-[26px] text-signal-red whitespace-nowrap">{formattedTime}</span>
              <span className="text-[12px] sm:text-[14px] text-ridge-gray mt-1 capitalize font-mono tracking-tight text-center">{formattedDate}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-start">
          <img src={match.awayTeam.crest} alt={match.awayTeam.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 order-1" />
          <span className="font-display font-semibold text-[14px] sm:text-[18px] lg:text-[20px] text-center md:text-left leading-tight text-balance order-2">
            {match.awayTeam.shortName}
          </span>
        </div>
      </div>
    </div>
  );
};