import React from 'react'
import { Match } from '../components'

const TopPicks = () => {
  return (
    <section className="top_picks page full-w">
            <h1 className="content-title widget">Today's Top Picks</h1>
        <article className="picks_container container widget">
            <ul className="picks">
                {
                    'abcdefghij'.split('').map( (elem, i) => (
                        <li key={i} className="pick full-w full-flex flex-row flex-wrap">
                            <Match />
                            <ul className="info flex-col jc-sb ai-c">
                                <li className="location full-w">La Liga</li>
                                <li className="date full-w">Home to win</li>
                                <li className="time full-w">Over 2.5 goals</li>
                                <li className="league full-w">Over 2.5 cards</li>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </article>
        <button className="archive_btn full-border">View Archive</button>
    </section>
  )
}

export default TopPicks
