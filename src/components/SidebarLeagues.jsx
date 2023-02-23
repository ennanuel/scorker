import { useEffect, useState } from 'react'
import { getTopCompetitions } from '../assets/functions/api'


const SidebarLeagues = () => {
    const [leagues, setLeagues] = useState([])
    const [loading, setLoading] = useState(false);
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        getTopCompetitions(setLeagues, '', setLoading, setEmpty, setError)
    })


    return (
        <ul className="match_lists">
            {
                leagues.length > 0 &&
                leagues.map( (league, i) => (
                    <li key={i} className="match_list league full-border cursor-pointer flex-row ai-c jc-sb">
                        {league.competition.name}
                        <span>{league.competition.area.name.toUpperCase()}</span>
                    </li>
                ))
            }
        </ul>
    )
    }

export default SidebarLeagues
