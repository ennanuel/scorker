import { useEffect, useState } from 'react'
import { getMatches } from '../assets/functions/api'
import Empty from './Empty'
import LiveMatch from './LiveMatch'
import Loader from './Loader'

const LiveMatches = () => {
    const [liveMatches, setLiveMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        getMatches(setLiveMatches, 'in_play', setLoading, setEmpty, setError)
    }, [])

    return (
        <>
        <div className="widget content-title">
            <h1>Live Scores</h1>
        </div>
        <ul className="widget container live_matches">
            {
                loading ?
                <Loader text="Loading live matches..." /> :
                empty ?
                <div className="no_match flex-col ai-c jc-c">
                    <Empty text="There are no Live matches now" /> 
                    <button className="btn">Upcoming Matches</button>
                </div> :
                liveMatches.length > 0 && liveMatches.map( (liveMatch, i) => <LiveMatch key={i} match={liveMatch} />)
            }
        </ul>
        </>
    )
}

export default LiveMatches
