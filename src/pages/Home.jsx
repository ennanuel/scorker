import { useEffect, useState } from 'react'
import { getTopCompetitions } from '../assets/functions/api'
import { LiveMatches, TopMatches, Slider } from '../components'

const Home = () => {
    const [topCompetitions, setTopCompetitions] = useState([]);
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        getTopCompetitions(setTopCompetitions, 3, setLoading, setEmpty, setError)
    }, [])

  return (
    <section className="home page full-w">
      <article className="home_content full-h">
        <div className="widget content-title">
            <h1>Today's Top Matches</h1>
        </div>
        <Slider matches={topCompetitions[0]?.matches || []} loading={loading} />

        <div className="widget content-title">
            <h1>Today's Top Competitions</h1>
        </div>
            <TopMatches matches={topCompetitions} loading={loading} empty={empty} />
            <LiveMatches />
      </article>
    </section>
  )
}

export default Home
