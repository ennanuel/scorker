import React from 'react'

const MatchDetails = () => {
  return (
    <>
      <article className="teams flex-row jc-se full-flex">
        <div className="team full-flex full-w">
            <div className="team_img full-border full-w"></div>
            <p className="team_name full-w">FC Barcelona</p>
        </div>
        <p className="flex-row ai-c jc-c">v</p>
        <div className="team full-flex full-w">
            <div className="team_img full-border"></div>
            <p className="team_name">Manchester United FC</p>
        </div>
      </article>
      <table className="match_info full-w flex-row flex-wrap">
        <tbody className="flex-row full-w jc-sb">
            <th className="full-flex flex-row ai-c jc-c">Venue</th>
            <tr className="full-flex full-w">Camp Nou, Barcelona</tr>
        </tbody>
        <tbody className="flex-row full-w jc-sb">
            <th className="full-flex flex-row ai-c jc-c">Competition</th>
            <tr className="full-flex full-w">UEFA Europa League</tr>
        </tbody>
        <tbody className="flex-row full-w jc-sb">
            <th className="full-flex flex-row ai-c jc-c">Referee</th>
            <tr className="full-flex full-w">Micheal Scott</tr>
        </tbody>
        <tbody className="flex-row full-flex jc-sb">
            <th className="full-flex flex-row ai-c jc-c">Date</th>
            <tr className="full-flex full-w">16th February, 2023</tr>
        </tbody>
        <tbody className="flex-row full-flex jc-sb">
            <th className="full-flex flex-row ai-c jc-c">Time</th>
            <tr className="full-flex full-w">12:00 PM (UTC +1)</tr></tbody>
      </table>
    </>
  )
}

export default MatchDetails
