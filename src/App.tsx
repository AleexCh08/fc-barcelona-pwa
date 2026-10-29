import { useState } from 'react';
import { NavigationBar } from './components/layout/NavigationBar';
import { MatchCard } from './components/domain/MatchCard';
import { StandingsTable } from './components/domain/StandingsTable';
import { FeatureCard } from './components/ui/FeatureCard';
import { Button } from './components/ui/Button';
import { useUpcomingMatches, useLastMatches, useStandings } from './hooks/useBarca';

function App() {
  const [comp, setComp] = useState<'PD' | 'CL'>('PD');
  
  const { data: upcomingMatches, isLoading: loadingUpcoming } = useUpcomingMatches();
  const { data: lastMatches, isLoading: loadingLast } = useLastMatches();
  const { data: standings, isLoading: loadingStandings } = useStandings(comp);

  return (
    <div className="min-h-screen bg-summit-white pt-20">
      <NavigationBar />
      
      <main className="layout-container py-section-gap">
        <section id="calendario" className="mb-section-gap scroll-mt-24 overflow-hidden">
          <h1 className="mb-8 uppercase text-[60px] md:text-[90px] leading-[0.9]">Próximos<br/>Partidos</h1>
          
          {loadingUpcoming ? (
            <div className="h-37.5 flex items-center justify-center border border-carbon-ink rounded-card">
              <span className="font-mono text-ridge-gray text-[14px]">SINCRONIZANDO DATOS...</span>
            </div>
          ) : upcomingMatches && upcomingMatches.length > 0 ? (
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6 sm:mx-0 sm:px-0 scroll-smooth">
              {upcomingMatches.map(match => (
                <div key={match.id} className="min-w-[85vw] sm:min-w-112.5 snap-center shrink-0">
                  <MatchCard match={match} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-ridge-gray font-mono text-[14px]">NO HAY PARTIDOS PROGRAMADOS</p>
          )}
        </section>

        <section id="posiciones" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-15 mb-section-gap items-start">
          <FeatureCard className="order-2 lg:order-1 transition-transform hover:-translate-y-1 duration-300">
            <h2 className="text-[26px] mb-6 text-signal-red uppercase">Últimos Resultados</h2>
            <div className="flex flex-col gap-4">
              {loadingLast ? (
                <span className="font-mono text-ridge-gray text-[14px]">SINCRONIZANDO RESULTADOS...</span>
              ) : (
                lastMatches?.map(match => (
                  <MatchCard key={match.id} match={match} />
                ))
              )}
            </div>
          </FeatureCard>

          <div className="bg-glacier-mist p-6 md:p-8 rounded-card order-1 lg:order-2">
            <div className="flex gap-2 mb-8">
              <Button 
                variant={comp === 'PD' ? 'primary' : 'secondary'} 
                onClick={() => setComp('PD')}
                className="text-xs sm:text-sm px-4 py-2"
              >
                LALIGA
              </Button>
              <Button 
                variant={comp === 'CL' ? 'primary' : 'secondary'} 
                onClick={() => setComp('CL')}
                className="text-xs sm:text-sm px-4 py-2"
              >
                CHAMPIONS
              </Button>
            </div>

            {loadingStandings ? (
              <span className="font-mono text-ridge-gray text-[14px]">CALCULANDO POSICIONES...</span>
            ) : standings ? (
              <StandingsTable 
                standings={standings} 
                competitionName={comp === 'PD' ? 'LALIGA - TOP 8' : 'FASE DE GRUPO'} 
              />
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;