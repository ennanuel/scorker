import { useState } from 'react'
import { Match, Loader, Empty } from './'

const TopMatches = ({ matches, loader, empty }) => {
    const [showCompetition, setShowCompetition] = useState(0)

    return (
        <>
        <div className="widget container top_leagues flex-col ai-c jc-c">
            {
                loader ?
                <Loader text="Loading matches..." /> :
                empty ?
                <Empty text="no matches found." /> :
                <ul className="full-flex league_container full-w flex-col jc-c ai-fs">
                    <li className="league_list full-border league_titles cursor-pointer flex-row relative front">
                        {
                            matches.length > 0 && matches.map( (league, i) => (
                                <p 
                                    onClick={() => { setShowCompetition(i) }} 
                                    key={i} 
                                    className={`league_title ${ showCompetition === i && 'active'} ${i === 0 && 'no-right-border'}`}
                                >
                                    {window.innerWidth < 600 && league.competition.name.length > 8 ? league.competition.name.substring(0, 8) + '...' : league.competition.name}
                                </p>
                            ))
                        }
                    </li>
                    <li className="league_list full-w">
                        <div className="full-w">
                            {
                                matches && matches.map( (elem, i) => (
                                    <>
                                    {
                                        showCompetition === i &&
                                        <ul key={i} className="league_matches full-flex flex-row ai-c jc-fs flex-wrap full-h full-w">
                                        {
                                            elem.matches.map( (match, j) => <Match key={j} match={match} />)
                                        }
                                        </ul>
                                    }
                                    </>
                                ))
                            }
                        </div>
                    </li>
                </ul>
            }
            <button className="btn">
                View More Matches
            </button>
        </div>
        </>
    )
}

export default TopMatches
