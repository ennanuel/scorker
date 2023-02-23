import image2 from '../assets/images/soccer_ball2.svg'


const Loader = ({ text }) => {
  return (
    <div className="loader fetch_result relative flex-col ai-c jc-c full-w">  
        <div className="line absolute line1"></div>
        <div className="line absolute line2"></div>
        <div className="ball">
            <img src={image2} className="full-w" alt="" />
        </div>
        <div className="moving_stones full-w flex-col ai-fe">
            <div className="moving_stone stone1" />
            <div className="moving_stone stone2" />
            <div className="moving_stone stone3" />
        </div>
        <h3>{text}</h3>
    </div>
  )
}

export default Loader
