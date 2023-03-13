import Match from "./Match"

const Pick = ({ match }) => {
    const homeWin = match?.h2h?.outcome['1']
    const awayWin = match?.h2h?.outcome['2']
    const draw = match?.h2h?.outcome['X']
    const avgGoals = match?.h2h?.goals?.average?.fullTime?.total

    return (
        <li className="pick full-w full-border full-flex flex-row flex-wrap">
            <Match match={match} />
            <ul className="info flex-col jc-sb ai-c">
                <li className="location full-w">{match?.competition?.name}</li>
                <li className="date full-w">{`${homeWin >= awayWin ? `${match?.homeTeam.shortName} to win` : draw > awayWin ? 'Draw' :`${match?.awayTeam.shortName} to win`}`}</li>
                <li className="time full-w">Over {avgGoals <= 1 ? '0.5' : (avgGoals > 1 && avgGoals < 3 ? '1.5' : avgGoals >= 3 && avgGoals < 4 ? '2.5' : '3.5')} goals</li>
                <li className="league full-w">Over 2.5 cards</li>
            </ul>
        </li>
    )
}

export default Pick
