import { useState, useEffect, useRef } from 'react'
import { getMatches } from '../assets/functions/api'

const Notification = () => {
    const [liveMatches, setLiveMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)
    const [height, setHeight] = useState(0)
    const sectionRef = useRef()

    useEffect( () => {
        getMatches(setLiveMatches, '', setLoading, setEmpty, setError)
        setHeight(sectionRef.current.offsetHeight + 'px')
    }, [sectionRef])

    return (
        <section className="notification relative" ref={sectionRef} style={{maxHeight: height}}>
            <ul className="match_scores flex-row ai-c">      
                {
                    liveMatches.filter(
                        liveMatch => liveMatch.status !== "TIMED"
                    ).map( (match, i) => (
                        <li key={i} className="match_score full-flex full-w flex-row ai-c jc-c">
                            { match.homeTeam.tla } { match.score.fullTime.home || match.score.firstHalf.home + (match.score.secondHalf.home || 0) }-{ match.score.fullTime.away || match.score.firstHalf.away + (match.score.secondHalf.away || 0) } { match.awayTeam.tla } ({match.liveTime}')
                        </li>
                    ) )
                }
            </ul>
        </section>
    )
}

export default Notification
