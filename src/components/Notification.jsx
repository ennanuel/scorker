import { useState, useEffect, useRef } from 'react'
import { getMatches } from '../assets/functions/api'

let firstTime = true

const Notification = () => {
    const [liveMatches, setLiveMatches] = useState([])
    const [style, setStyle] = useState({ maxHeight: 0 })
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)
    const sectionRef = useRef()

    useEffect( () => {
        if(firstTime) {
            firstTime = false;
            getMatches(setLiveMatches, '[^timed]', setLoading, setEmpty, setError)
        }
        
        setStyle({maxHeight: liveMatches.length <= 0 ? '0px' : sectionRef.current.offsetHeight + 'px', margin: liveMatches.length <= 0 && 0})
    }, [liveMatches])

    return (
        <section className="notification relative" style={style}>
            <ul className="match_scores flex-row ai-c" ref={sectionRef}>      
                {
                    liveMatches.map( (match, i) => (
                        <li key={i} className="match_score full-flex full-w flex-row ai-c jc-c">
                            { match.homeTeam.tla } { match.score.fullTime.home || match.score.firstHalf.home + (match.score.secondHalf.home || 0) }-{ match.score.fullTime.away || match.score.firstHalf.away + (match.score.secondHalf.away || 0) } { match.awayTeam.tla }[{match.status !== 'IN_PLAY' ? match.status === "POSTPONED" ? "POST" : match.liveTime : match.liveTime + "'"}]
                        </li>
                    ) )
                }
            </ul>
        </section>
    )
}

export default Notification
