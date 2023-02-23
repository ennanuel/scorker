import { Charts, FinishedMatch, MatchDetails, TableInfo, TeamForm } from '../components'

const Match = () => {
  return (
    <section className="page match_page">
      <MatchDetails />
      <div className="filters full-border flex-row jc-c">
        <button className="filter active">Full Time</button>
        <button className="filter">1<sup>st</sup> Half</button>
        <button className="filter">2<sup>nd</sup> Half</button>
      </div>

      <h2 className="widget info-title">Showing Fulltime Details</h2>
      <div className="teams_form flex-row flex-wrap">
        <TeamForm />
        <TeamForm />
      </div>

      <TableInfo />

      <h2 className="widget info-title">Head to Heads</h2>
      <div className="h2h">
        <p className="widget content-title">H2H Matches</p>
        <ul className="h2h_matches container widget flex-col flex-wrap full-w">
          {
            'abcdefghij'.split('').map( (elem, i) => {
              const score1 = Math.round( Math.random() * 5 );
              const score2 = Math.round( Math.random() * 5 );

              return (
                <FinishedMatch key={i} score1={score1} score2={score2} />
              )
            })
          }
        </ul>

        <TableInfo />

        <h2 className="widget info-title">Both Teams' Stat Chart</h2>
        <Charts />

        <h2 className="widget info-title">Barcelona Stat Chart</h2>
        <Charts />

        <h2 className="widget info-title">Manchester United Stat Chart</h2>
        <Charts />

      </div>
    </section>
  )
}

export default Match
