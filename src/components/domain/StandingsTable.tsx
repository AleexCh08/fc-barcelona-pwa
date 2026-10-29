import React from 'react';
import type { Standing } from '../../types';
import { SectionLabel } from '../ui/SectionLabel';

interface StandingsTableProps {
  standings: Standing[];
}

export const StandingsTable: React.FC<StandingsTableProps> = ({ standings }) => {
  const topStandings = standings.slice(0, 6);

  return (
    <div className="w-full">
      <SectionLabel text="LALIGA - TOP 6" />
      <div className="mt-4 border-t border-carbon-ink">
        {topStandings.map((row) => (
          <div key={row.team.id} className="flex items-center py-4 border-b border-carbon-ink/20">
            <span className="w-8 font-mono text-[14px] text-ridge-gray">{row.position}</span>
            <div className="flex items-center gap-3 flex-1">
              <img src={row.team.crest} alt={row.team.name} className="w-6 h-6 object-contain" />
              <span className={`font-body text-[16px] ${row.team.id === 81 ? 'font-bold text-signal-red' : ''}`}>
                {row.team.shortName}
              </span>
            </div>
            <div className="flex gap-4 font-mono text-[14px]">
              <span className="w-6 text-center" title="Partidos Jugados">{row.playedGames}</span>
              <span className="w-6 text-center" title="Diferencia de Goles">{row.goalDifference}</span>
              <span className="w-8 text-center font-bold text-carbon-ink" title="Puntos">{row.points}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};