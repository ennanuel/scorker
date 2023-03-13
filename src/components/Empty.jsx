import image from '../assets/images/empty.svg'
import image2 from '../assets/images/soccer_ball2.svg'

const Empty = ({ text }) => {
  return (
    <div className="empty fetch_result full-w relative flex-col ai-fe jc-c">
      <div className="ball relative">
        <img src={image2} className="full-w" alt="ball" />
      </div>
        <img src={image} alt="flash light" className="full-w torch absolute" />
        <h3 className="full-w">{text}</h3>
    </div>
  )
}

export default Empty
