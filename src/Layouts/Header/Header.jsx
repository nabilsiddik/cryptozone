import './header.scss'
import LogoWhite from '../../assets/images/logo-white.png'
import {Link} from 'react-router-dom'
// Components
import Button from '../../Components/Button'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="headerLogo">
                  <img src={LogoWhite} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <nav className="mainMenu">
                <ul>
                  <li><Link className='link' to='/'>Home</Link></li>
                  <li><Link className='link' to='/about-us'>About</Link></li>
                  <li><Link className='link' to='/pricing'>Pricing</Link></li>
                  <li><Link className='link' to='/blog'>Blog</Link></li>
                  <li><Link className='link' to='/contact-us'>Contact Us</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-md-3">
              <div className="headerButtons">
                    <Button size = 'medium' bgColor = 'transparent' type='button' btnText = 'Login'/>
                    <Button size = 'medium' bgColor = 'primary' type='button' btnText = 'Register'/>
              </div>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header
