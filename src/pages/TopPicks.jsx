import { useEffect, useState } from 'react'
import { getPicks } from '../assets/functions/api'
import { Match, Pick } from '../components'

const TopPicks = () => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)
    const [next, setNext] = useState(1)

    useEffect( () => {
        getPicks(setMatches, next, setLoading, setEmpty, setError)
    }, [next])

    return (
        <section className="top_picks page full-w">
                <h1 className="content-title widget">Today's Top Picks</h1>
            <article className="picks_container container widget">
                <ul className="picks">
                    {
                        matches?.matches?.length > 0 && matches.matches.map( (match, i) => <Pick match={match} key={i} /> )
                    }
                </ul>
            </article>
            <button className="archive_btn full-border">View Archive</button>
        </section>
    )
}

export default TopPicks
