import React from 'react'

const LiveMatch = ({ match }) => {
    const homeTeam = match.homeTeam.shortName
    const awayTeam = match.awayTeam.shortName
    const liveTime = /\+/.test(match.liveTime) ? match.liveTime.replace('+', '') : match.liveTime
    const timeElapsed = /\d/.test(liveTime) ? parseInt(( /\+/.test(liveTime) ? parseInt(liveTime.replace('+', '')) : liveTime * 100) / 90) : 50
    const homeScore = match.score.fullTime.home ? match.score.fullTime.home : match.score.firstHalf.home + (match.score.secondHalf.home || 0)
    const awayScore = match.score.fullTime.away ? match.score.fullTime.away : match.score.firstHalf.away + (match.score.secondHalf.away || 0)

    return (
        <li className="live_match cursor-pointer full-border flex-row ai-c jc-sb">
            <div className="match_det relative flex-row full-flex full-w full-h">
                <div className="progress absolute full-h" style={{width: timeElapsed+'%'}}></div>
                <span className="team_name relative front">{homeTeam.length > 8 ? homeTeam.substring(0, 8) + '...' : homeTeam}</span>
                <span className="score_line relative front">{homeScore} : {awayScore}</span>
                <span className="team_name relative front">{awayTeam.length > 8 ? awayTeam.substring(0, 8) + '...' : awayTeam}</span>
            </div>
            <span className="time full-w">{ liveTime }'</span>
        </li>   
  )
}

export default LiveMatch
