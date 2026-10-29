import { NavigationBar } from './components/layout/NavigationBar';
import { MatchCard } from './components/domain/MatchCard';
import { StandingsTable } from './components/domain/StandingsTable';
import { FeatureCard } from './components/ui/FeatureCard';
import { useNextMatch, useLastMatches, useStandings } from './hooks/useBarca';

function App() {
  const { data: nextMatch, isLoading: loadingNext } = useNextMatch();
  const { data: lastMatches, isLoading: loadingLast } = useLastMatches();
  const { data: standings, isLoading: loadingStandings } = useStandings();

  return (
    <div className="min-h-screen bg-summit-white pt-20">
      <NavigationBar />
      
      <main className="layout-container py-section-gap">
        <section className="mb-section-gap">
          <h1 className="mb-8 uppercase">Próximo<br/>Partido</h1>
          {loadingNext ? (
            <div className="h-37.5 flex items-center justify-center border border-carbon-ink rounded-card">
              <span className="font-mono text-ridge-gray text-[14px]">SINCRONIZANDO DATOS...</span>
            </div>
          ) : nextMatch ? (
            <MatchCard match={nextMatch} />
          ) : (
            <p className="text-ridge-gray font-mono text-[14px]">NO HAY PARTIDOS PROGRAMADOS</p>
          )}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-15 mb-section-gap items-start">
          <FeatureCard>
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

          <div>
            {loadingStandings ? (
              <span className="font-mono text-ridge-gray text-[14px]">CALCULANDO POSICIONES...</span>
            ) : standings ? (
              <StandingsTable standings={standings} />
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;