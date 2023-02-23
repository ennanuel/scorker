import image from '../assets/images/empty.svg'
import image2 from '../assets/images/soccer_ball2.svg'

const Empty = ({ text }) => {
  return (
    <div className="empty fetch_result relative flex-col ai-c jc-c">
      <div className="ball absolute">
        <img src={image2} className="full-w" alt="" />
      </div>
        <img src={image} alt="" className="full-w torch" />
        <h3>{text}</h3>
    </div>
  )
}

export default Empty
