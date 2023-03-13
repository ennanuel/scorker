import { useEffect, useState } from 'react';import SidebarLeagues from './SidebarLeagues';
import Match from './Match'
import Loader from './Loader';
import SidebarUpcoming from './SidebarUpcoming';
import { getTopCompetitions } from '../assets/functions/api';


const Sidebar = () => {
    const [match, setMatch] = useState([])
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        getTopCompetitions(setMatch, null, setLoading, setEmpty, setError)
    }, [])

    return (
        <article className="sidebar full-flex">
            <div className="widgets_container">
                <div className="widget full-flex match">
                    <h2 className="title">Featured Match</h2>
                    {
                        <Match match={match[Math.floor(Math.random() * (match.length - 1))]?.matches[0]} />
                    }
                </div>
                <div className="widget full-flex upcoming_matches">  
                    <h2 className="title">Upcoming Matches</h2>
                    <SidebarUpcoming />
                </div>
                <div className="widget full-flex top_leagues">  
                    <h2 className="title">Top Leagues</h2>
                    <SidebarLeagues />
                </div>
            </div>
        </article>
  )
}

export default Sidebar
