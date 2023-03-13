import { useEffect, useState, useRef } from 'react'

const Match = ({ match }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [style, setStyle] = useState({})
    const [showVs, setShowVs] = useState(false)
    const divRef = useRef()
    const matchDate = new Date(match?.utcDate)
    const hr = matchDate.getHours()
    const mins = matchDate.getMinutes()

    useEffect( () => {
        const offsetWidth = divRef.current.offsetWidth
        setStyle({
            position: offsetWidth > 400 ? 'absolute' : 'relative',
            top:  (offsetWidth > 400 ? 50 : 0 ) + 'px',
        })
        setShowVs(offsetWidth <= 400)

        const handleResize = () => {
            setInnerWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [innerWidth])

    return (
        <div ref={divRef} className="match_list relative full-w full-flex flex-col jc-se ai-se">
            <div className="teams_info full-w flex-row full-flex jc-sb ai-c">
                <div className="team team1 flex-col jc-sb ai-c full-flex">
                    <img src={match?.homeTeam?.crest} className="team_img full-w" />
                    <p className="team_name">{match?.homeTeam?.shortName}</p>
                </div>
                { showVs && <h3 className='vs flex-row ai-c jc-c'>vs</h3>}
                <div className="team team2 flex-col jc-sb ai-c full-flex">
                    <img src={match?.awayTeam?.crest} className="team_img full-w" />
                    <p className="team_name">{match?.awayTeam?.shortName}</p>
                </div>
            </div>
                {
                    match?.remTime ?
                    <div className="time_info flex-col ai-c jc-c" style={style}>
                        <h4 className="no_padding">
                            {`Starts in ${match.remTime.day ? (`${match.remTime.day} Day${match.remTime.day > 1 ? 's' : ''}`) : match.remTime.hours ? (`${match.remTime.hours} Hour${match.remTime.hours > 1 ? 's' : ''}`) : (`${match.remTime.minute} Minutes${match.remTime.minute > 1 ? 's' : ''}`)}`}
                        </h4>
                        <h3 className="clock_time no_padding">
                            {`${hr > 12 ? hr - 12 : hr}:${mins < 10 ? '0' + mins : mins} ${hr >= 12 ? 'PM' : 'AM'}`}
                        </h3>
                    </div> :
                    match?.status === 'POSTPONED' ?
                    <h3 className="time_info post" style={style}>POSTPONED</h3> :
                    <div className="match_outcome flex-row ai-c jc-sb" style={style}>
                        <div className="score_line full-flex flex-row">
                            <div className="ft_score_line no_padding full-flex flex-row ai-c jc-c">
                                <h3 className="match_score home_score">{match?.score?.fullTime?.home || 0}</h3>
                                :
                                <h3 className="match_score away_score">{match?.score?.fullTime?.away || 0}</h3>
                            </div>
                            <hr className="v-line" />
                            <div className="ht_score_line no_padding full-flex flex-row ai-c jc-c">
                                (
                                <h5 className="match_score home_score">{match?.score?.firstHalf?.home}</h5>
                                :
                                <h5 className="match_score home_score">{match?.score?.firstHalf?.away}</h5>
                                )
                            </div>
                        </div>
                        <h3 className="match_time">
                            {
                                match?.liveTime
                            }'
                        </h3>
                    </div>
                }
        </div>
    )
}

export default Match
