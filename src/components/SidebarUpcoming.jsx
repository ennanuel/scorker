import { useState, useEffect } from 'react'
import { getMatches } from '../assets/functions/api'

const SidebarUpcoming = () => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        getMatches(setMatches, 'timed', setLoading, setEmpty, setError)
    }, [])

    return (
        <ul className="match_lists">
            {
                matches.slice(0, 5).map( (match, i) => {
                    const time = new Date(match.utcDate)
                    const hrs = time.getHours()
                    const mins = time.getMinutes()

                    return (
                        <li key={i} className="match_list full-border cursor-pointer flex-row ai-c jc-sb">
                            {match.homeTeam.shortName} - {match.awayTeam.shortName}
                            <span>
                                {hrs < 10 ? '0' + hrs : hrs > 12 ? hrs - 12 : hrs}:{mins < 10 ? '0' + mins : mins}{hrs >= 12 ? ' PM' : ' AM'}
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SidebarUpcoming
