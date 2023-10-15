import '../assets/CSS/variables.scss';

const SingleCoionBox = (props) => {
  return (
    <div className="singleCoinBox">
    <div className="coinTop">
        <img src={props.coinIcon} alt="" />
        <div className="titles">
            <span className='title'>{props.coinTitle}</span>
            <span className='currency'>{props.coinCurrency}</span>
        </div>
    </div>
    <div className="coinBottom">
        <div className="price">
            <span className='priceTitle'>${props.price}</span>
            <span className='priceType'>{props.priceType}</span>
        </div>
        <div className="priceUpDown">
            <span style = {{
                color: props.percentage < 0 ? 'red' : 'green'
            }} className='percentage'>{props.percentage}%</span>
            <span className='duration'>{props.duration}</span>
        </div>
    </div>
  </div>
  )
}

export default SingleCoionBox
