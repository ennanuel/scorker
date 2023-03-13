import { useState, useEffect, useRef } from "react"
import { getTopCompetitions } from "../assets/functions/api"
import { AiOutlineDown } from "react-icons/ai"
import { MatchesMatch } from "../components"
import { useNavigate, useParams } from "react-router-dom"


const Matches = () => {
    const [matches, setMatches] = useState([])
    const [showOptions, setShowOptions] = useState(false)
    const [height, setHeight] = useState(0)
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const [error, setError] = useState(false)
    const optionsRef = useRef()
    const navigate = useNavigate()
    const {competition, status} = useParams()

    const toggleOptions = (e) => {
        setShowOptions( prev => !prev )
        setHeight( showOptions ? 0 : optionsRef.current.offsetHeight + 'px' )

        if(!e.target.closest('.option')) return;
        navigate(`/matches/${e.target.getAttribute('value')}/${status}`)
    }

    const filterStatus = (e) => {
        navigate(`/matches/${competition}/${e.target.value}`)
    }

    useEffect( () => {
        getTopCompetitions(setMatches, null, setLoading, setEmpty, setError)
    }, [])

    return (
        <section className="matches_page page full-w">
            <div className="filter widget flex-row flex-wrap ai-c jc-sb">
                <div className="comp_filter full-flex">
                    <h3 className="filter_text">Competition</h3>
                    <div className="comp_selector relative full-w" onClick={toggleOptions}>
                        <p className="select flex-row full-border">
                            <span className="full-flex">{competition === 'all' ? 'All Competitions' : competition}</span>
                            <span className="icon flex-row ai-c jc-c"><i className={`opt_icon flex-row ai-c jc-c ${showOptions && 'rotate_icon'}`}><AiOutlineDown /></i></span>
                        </p>
                        <div style={{maxHeight: height}} className="options absolute front flex-col full-w">
                            <div className="options_container full-border" ref={optionsRef}>
                                <p className="option cursor-pointer" value="all">All Competitions</p>
                                {
                                    matches.length > 0 &&
                                    matches?.map( (comp, i) => <p key={i} className={`option cursor-pointer ${comp.competition.name === competition && 'active_option'}`} value={comp.competition.name}>{comp.competition.name}</p> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="match_status_filter">
                    <h3 className="filter_text">Match Status</h3>
                    <ul className="sort full-border flex-row ai-c jc-c flex-wrap">
                        <li><button className={`full-border match_status_filter ${status === 'all' && 'active_filter_btn'}`} value="all" onClick={filterStatus}>All Matches</button></li>
                        <li><button className={`full-border match_status_filter ${status === 'timed' && 'active_filter_btn'}`} value="timed" onClick={filterStatus}>Upcoming</button></li>
                        <li><button className={`full-border match_status_filter ${status === 'in_play' && 'active_filter_btn'}`} value="in_play" onClick={filterStatus}>Ongoing</button></li>
                        <li><button className={`full-border match_status_filter ${status === 'finished' && 'active_filter_btn'}`} value="finished" onClick={filterStatus}>Finished</button></li>
                    </ul>
                </div>
            </div>
            <div className="widget content-title">
                <h1>Showing Matches - {status.substring(0, 1).toUpperCase() + status.substring(1, ).replace('_', ' ')}</h1>
            </div>
            <div className="matches_container">
            
                <article className="match_result widget flex-col">
                    {
                        matches.length > 0 &&
                        <MatchesMatch 
                            matches={
                                matches.map( elem => 
                                    ({
                                        ...elem, 
                                        matches: elem?.matches?.filter( 
                                            match => status === 'in_play' ? 
                                            /(paused|in_play)/i.test(match?.status) :
                                            match?.status?.includes(status.toUpperCase()) || status === 'all'
                                        )
                                    }) )
                                    .filter( (match) => (
                                            match?.competition?.name.includes(competition) || competition === 'all') && 
                                            (match?.matches?.some( elem => status === 'in_play' ? 
                                            /(paused|in_play)/i.test(elem?.status) :
                                            elem?.status?.includes(status.toUpperCase()) || status === 'all'
                                        ) 
                                    ))
                            } 
                        />
                    }
                </article>
                    <button className="btn">Show Archive</button>
            </div>
        </section>
    )
}

export default Matches
