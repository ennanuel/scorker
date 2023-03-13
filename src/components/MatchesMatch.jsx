const MatchesMatch = ({ matches }) => {
  return (
    matches?.map( (match, i) => (
        <div key={i} className="matches_matches">
            <div className="league_title flex-row ai-c jc-sb">
                <h3>{match.competition.name}</h3>
                <p>{match.competition.area.name.toUpperCase()}</p>
            </div>
            <ul className="live_matches list_item flex-row flex-wrap jc-sb">
                {
                    match.matches.map( (elem, j) => {
                        const time = new Date(elem.utcDate)
                        const hrs = time.getHours()
                        const mins = time.getMinutes()

                        
                        return (
                            <li key={j} className={`live_match flex-row full-border full-flex jc-sb ai-c ${/(in_play|paused)/i.test(elem.status) ? 'yellow' : /(finished|postponed)/i.test(elem.status) ? 'gray' : ''}`}>
                                <div className="teams relative full-flex full-w full-h flex-col jc-sb ai-fs">
                                    <div className="progress absolute full-h"></div>
                                    <span className={`team_name home_team ${elem.score.fullTime.home > elem.score.fullTime.away || /(in_play|paused|timed)/i.test(elem.status)  ? 'won' : 'failed'}`}>{elem.homeTeam.name}</span>
                                    <span className={`team_name away_team ${elem.score.fullTime.away > elem.score.fullTime.home || /(in_play|paused|timed)/i.test(elem.status)  ? 'won' : 'failed'}`}>{elem.awayTeam.name}</span>
                                </div>
                                {
                                    !/(timed|postponed)/i.test(elem.status) && 
                                    <>
                                    <hr className="v-line full-h" />
                                    <div className="score full-h flex-col ai-c jc-sb">
                                        <span className={`${elem.score.fullTime.home > elem.score.fullTime.away || /(in_play|paused)/i.test(elem.status) ? 'won' : 'failed'}`}>{elem.score.fullTime.home || 0}</span>
                                        <span className={`${elem.score.fullTime.away > elem.score.fullTime.home || /(in_play|paused)/i.test(elem.status) ? 'won' : 'failed'}`}>{elem.score.fullTime.away || 0}</span>
                                    </div>
                                    </>
                                }
                                <span className="upcoming flex-row ai-c jc-c full-h">
                                    {
                                        /timed/i.test(elem.status) ?
                                        <>
                                        {hrs > 12 ? hrs - 12 : hrs}
                                        :
                                        {mins < 10 ? '0' + mins : mins}
                                        {hrs >= 12 ? ' PM' : ' AM'}
                                        </> :
                                        <>
                                        { /[a-z]+/i.test(elem.liveTime) ? elem.status === 'POSTPONED' ? 'POST' : elem.liveTime : elem.liveTime + "'" }
                                        </>
                                    }
                                </span>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    ))
  )
}

export default MatchesMatch
