const TopMatch = ({ match }) => {
  return (
    <div className="slider_match full-w">
      <div className="team_info full-w flex-col ai-c jc-sb">
        <img src={match?.homeTeam?.crest} className="slider_match_img full-w" alt="" />
        <h4>{match?.homeTeam?.name}</h4>
      </div>
      <h2 className="vs flex-row ai-c jc-c">vs</h2>
      <div className="team_info full-w flex-col ai-c jc-sb">
        <img src={match?.awayTeam?.crest} className="slider_match_img full-w" alt="" />
        <h4>{match?.awayTeam?.name}</h4>
      </div>
    </div>
  )
}

export default TopMatch
