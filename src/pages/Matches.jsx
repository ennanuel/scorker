import { Match } from "../components"

const Matches = () => {
  return (
    <section className="matches_page page full-w">
        <div className="widget content-title">
            <h1>Showing All Leagues</h1>
        </div>
        <div className="container widget">
            <ul className="sort flex-row ai-c jc-c flex-wrap">
                <li><button className="full-border">All Matches</button></li>
                <li><button className="full-border">Upcoming</button></li>
                <li><button className="full-border">Ongoing</button></li>
                <li><button className="full-border">Finished</button></li>
            </ul>
        
            <article className="match_result">
                <h2 className="league_title relative front">UEFA Europa League</h2>
                <ul className="live_matches list_item flex-row flex-wrap jc-sb">
                    <li className="live_match flex-row full-border full-flex jc-sb ai-c">
                        <div className="teams relative full-flex full-w full-h flex-col jc-sb ai-fs">
                            <div className="progress absolute full-h"></div>
                            <span className="team_name home_team">Barcelona</span>
                            <span className="team_name away_team">Manchester United</span>
                        </div>
                        <hr className="v-line full-h" />
                        <div className="score full-h flex-col ai-c jc-sb">
                            <span>0</span>
                            <span>0</span>
                        </div>
                        <span className="time upcoming flex-row ai-c jc-c full-h">12:00PM</span>
                    </li>
                    <li className="live_match flex-row full-border full-flex jc-sb ai-c">
                        <div className="teams relative full-flex full-w full-h flex-col jc-sb ai-fs">
                            <div className="progress absolute full-h"></div>
                            <span className="team_name home_team">Barcelona</span>
                            <span className="team_name away_team">Manchester United</span>
                        </div>
                        <hr className="v-line full-h" />
                        <div className="score full-h flex-col ai-c jc-sb">
                            <span>0</span>
                            <span>0</span>
                        </div>
                        <span className="time upcoming flex-row ai-c jc-c full-h">12:00PM</span>
                    </li>
                    <li className="live_match flex-row full-border full-flex jc-sb ai-c">
                        <div className="teams relative full-flex full-w full-h flex-col jc-sb ai-fs">
                            <div className="progress absolute full-h"></div>
                            <span className="team_name home_team">Barcelona</span>
                            <span className="team_name away_team">Manchester United</span>
                        </div>
                        <hr className="v-line full-h" />
                        <div className="score full-h flex-col ai-c jc-sb">
                            <span>0</span>
                            <span>0</span>
                        </div>
                        <span className="time upcoming flex-row ai-c jc-c full-h">12:00PM</span>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Matches
