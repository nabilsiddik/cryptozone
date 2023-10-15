import './home.scss'
import PageHero from '../../Components/Sections/pageHero/PageHero'
import heroBgImage from '../../assets/images/hero-bg.jpg'
import Button from '../../Components/Button'
import CoinBox from '../../Components/Sections/coinBox/CoinBox'
import RecentBlogs from '../../Components/Sections/recentBlogs/RecentBlogs'


const Home = () => {
  return (
    <div className='home'>
      <PageHero button = {<Button bgColor = 'primary' size = 'large' btnText='Get Started' />} bgImage = {heroBgImage} heroTitle = 'Your Globel OTC desk for Cryptocurrencies' heroDesc = 'Transfer USD, EUR, or Crypto and start trading today!' />
      <CoinBox />
      <RecentBlogs/>
    </div>
  )
}

export default Home
