import React from 'react'

const Form = () => {
  return (
    <div className="team_form full-flex flex-col flex-wrap">
        <div className="form full-flex">
            <h5 className="widget content-title">Barca's Form</h5>
            <div className="widget container form_graph flex-row jc-se ai-fe">
            {
                'abcdefg'.split('').map( (elem, i) => {
                  const rand = Math.random() * 100

                  return (
                    <div key={i} className={`form_graph_info flex-col full-h full-flex jc-fe ai-c ${rand < 33 ? 'win' : rand < 67 ? 'draw' : 'lose'}`}>
                        <div className="opp full-border full-w" />
                        <div className="graph_line full-w" style={{height: rand + '%'}} />
                        <p className="outcome flex-row ai-c jc-c">{rand < 33 ? 'W' : rand < 67 ? 'D' : 'L'}</p>
                    </div>
                  )
                })
            }
            </div>
        </div>
        <div className="matches full-flex">
            <h5 className="widget content-title">Previous Matches</h5>
            <ul className="prev_matches widget container flex-col">
            {
                'abcdef'.split('').map( (match, i) => {
                    const rand = Math.random()

                    return (
                      <li key={i} className={`prev_match full-border live_match flex-row ${rand < 0.33 ? 'win' : rand < 0.67 ? 'draw' : 'lose'}`}>
                        <div className="match_details flex-row full-flex">
                          <span className="team_name">Barca</span>
                          <span className="score_line">2:2</span>
                          <span className="team_name">United</span>
                        </div>
                        <p className="outcome flex-row ai-c jc-c full-w">
                          { rand < 0.33 ? 'W' : rand < 0.67 ? 'D' : 'L' }
                        </p>
                      </li>
                    )
                })
            }
            </ul>
        </div>
    </div>
  )
}

export default Form
