import { useEffect, useState, useRef } from 'react'
import { BsChevronRight,BsChevronLeft } from 'react-icons/bs'
import ballImg from '../assets/images/soccer_ball.svg'
import SliderMatch from './SliderMatch'

let firstTime = true

const Slider = ({ matches }) => {
    const [index, setIndex] = useState(0)
    const [newMatches, setNewMatches] = useState([])
    const [{animation, move}, setOptions] = useState({animation: '', move: ''})
    const rightBtnRef = useRef()
    const leftBtnRef = useRef()

    const moveRight = async () => {
        if(matches.length < 1) return;
        setIndex(prev => prev >= matches.length - 1 ? 0 : prev + 1 )
        setNewMatches( (prev) => {
            const index = matches.findIndex( elem => elem === prev[2]) >= matches.length - 1 ? -1 : matches.findIndex( elem => elem === prev[2])
            return [...prev, matches[index + 1]].slice(1, 4)
        })

        setOptions({ animation: ''})
        setTimeout(() => {animate('right')}, 0)
    }

    const moveLeft = async () => {
        if(matches.length < 1) return;
        setIndex(prev => prev <= 0 ? matches.length - 1 : prev - 1 )
        setNewMatches( (prev) => {
            const index = matches.findIndex( elem => elem === prev[0]) <= 0 ? matches.length : matches.findIndex( elem => elem === prev[0])
            return [matches[index - 1], ...prev].slice(0, 3)
        })

        setOptions({ animation: ''})
        setTimeout(() => {animate('left')}, 0)
    }

    const animate = (move) => {
        setOptions({animation: move === 'left' ? 'move-left' : 'move-right'})
    }

    useEffect( () => {
        let interval;

        if( newMatches.length < 1 ) {
            setNewMatches(matches.length < 3 ? [...matches, ...matches, ...matches].slice(0, 3) : matches.slice(0, 3))
        }

        interval = setInterval( () => {rightBtnRef.current.click()} , 5000 )
        
        return () => clearInterval(interval)
    } , [matches, move])

    return (
        <div className="container slider matches relative widget flex-row">
            <img src={ballImg} className="absolute slider_img" aria-hidden="true" alt="" />
            <button ref={rightBtnRef} onClick={moveRight} className='navigate-btn full-w full-h right absolute jc-c ai-c'>
                <BsChevronRight />
            </button>
            <button ref={leftBtnRef} onClick={moveLeft} className='navigate-btn full-w full-h left absolute flex-row jc-c ai-c'>
                <BsChevronLeft />
            </button>
            <ul className={`top_matches full-w flex-row ai-c jc-c ${animation} relative front`}>
                {
                    newMatches.map( (match, i) => (
                    <li key={i} className="full-w slider_match_list full-flex flex-row ai-c jc-c">
                        {
                            match &&
                            <SliderMatch match={match} />
                        }
                    </li>))
                }
            </ul>
            
            <ul className="circles flex-row absolute">
                {
                    matches?.length > 1 ?
                    matches.map( (alph, i) => <li key={i} className={`circle ${i === index && 'active_circle'}`} /> ) :
                    <li className="circle" />
                }
            </ul>
        </div>
    )
}

export default Slider
