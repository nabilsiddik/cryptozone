import SingleCoionBox from "../../SingleCoionBox"
import bitcoinIcon from '../../../assets/images/bitcoin.png'
import ethereumIcon from '../../../assets/images/ethereum.png'
import tetherIcon from '../../../assets/images/tether.png'

const CoinBox = () => {
  return (
    <div className='coinBox'>
      <div className="container">
      <div className="row">
            <SingleCoionBox coinIcon = {bitcoinIcon} coinTitle = 'Bitcoin' coinCurrency = 'BTC' price = {16048.40} priceType = 'Latest price' percentage = {-1.26} duration = '24h change' />

            <SingleCoionBox coinIcon = {ethereumIcon} coinTitle = 'Ethereum' coinCurrency = 'ETH' price = {1122.44} priceType = 'Latest price' percentage = {-1.55} duration = '24h change' />

            <SingleCoionBox coinIcon = {tetherIcon} coinTitle = 'Tether' coinCurrency = 'USDT' price = {1.00} priceType = 'Latest price' percentage = {0.0099} duration = '24h change' />
        </div>
      </div>
    </div>
  )
}

export default CoinBox
