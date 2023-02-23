import { AiOutlineDown } from "react-icons/ai"

const FinishedMatch = ({ score1, score2 }) => {
  return (
    <li className={`h2h_match full-border flex-row jc-sb full-flex`}>
      <div className="h2h_teams flex-col full-w jc-fs">
        <div className={`h2h_team flex-row jc-sb ai-c ${score1 > score2 ? 'light' : 'dark'}`}>
          <span className="team_name">Barcelona</span>
          <span className={`score ${score1 > score2 ? 'light' : 'dark'}`}>{score1}</span>
        </div>
        <div className={`h2h_team flex-row jc-sb ai-c ${score2 > score1 ? 'light' : 'dark'}`}>
          <span className="team_name">Machester United</span>
          <span className="score">{score2}</span>
        </div>
      </div>
      <button className="outcome flex-row ai-c jc-c full-w">
        <AiOutlineDown />
      </button>
    </li>
  )
}

export default FinishedMatch
