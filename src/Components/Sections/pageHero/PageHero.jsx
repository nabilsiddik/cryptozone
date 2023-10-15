import Button from "../../Button"
import './pageHero.scss'

const PageHero = (props) => {
  return (
    <div className='pageHero' style={{
        backgroundImage: `url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no repeat'
    }}>
      <div className="container">
        <div className="row">
        <h1>{props.heroTitle}</h1>
                <p>{props.heroDesc}</p>
                {props.button}
        </div>
      </div>
    </div>
  )
}

export default PageHero
