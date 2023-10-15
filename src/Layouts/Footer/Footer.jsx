import './footer.scss'
import footerLogo from '../../assets/images/logo-white.png'
import locationMap from '../../assets/images/location-map.png'
import {Link} from 'react-router-dom'



const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row mainFooter">
          <div className="col-md-3">
              <div className="widget widget1">
                <img className='footerLogo' src={footerLogo} alt="" />
                <p>CryptoZone is a Crypto & Crypto Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                <div className="footerSocial">
                  <ul>
                    <li><Link className='menuItem' to='www.facebook.com'></Link></li>
                    <li><Link className='menuItem' to='www.instagram.com'>Instagram</Link></li>
                    <li><Link className='menuItem' to='www.twitter.com'>Twitter</Link></li>
                    <li><Link className='menuItem' to='www.youtube.com'>YouTube</Link></li>
                  </ul>
                </div>
              </div>
          </div>

          <div className="col-md-3 d-flex justify-content-center">
            <div className="widget widget2">
              <h3 className='widgetTitle'>Other Links</h3>
              <ul>
                  <li><Link className='menuItem' to='www.facebook.com'>About Us</Link></li>
                  <li><Link className='menuItem' to='www.instagram.com'>Pricing Plan</Link></li>
                  <li><Link className='menuItem' to='www.twitter.com'>Blog List</Link></li>
                  <li><Link className='menuItem' to='www.youtube.com'>Our Blogs</Link></li>
                  <li><Link className='menuItem' to='www.youtube.com'>Contact Us</Link></li>
                </ul>
            </div>
          </div>

        <div className="col-md-3 d-flex justify-content-center">
          <div className="widget widget3">
                <h3 className='widgetTitle'>Blog Posts</h3>
                <div className="footerBlogs">
                  <div className="singleFooterBlog">
                    <h5 className='blogTitle'>What is cryptocurrency and how does it work.</h5>
                    <span className='blogDate'>June 18, 2022</span>
                  </div>
                  <div className="singleFooterBlog">
                    <h5 className='blogTitle'>What is cryptocurrency and how does it work.</h5>
                    <span className='blogDate'>June 18, 2022</span>
                  </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
              <div className="widget widget-four">
                <h3 className='widgetTitle'>Location</h3>
                <h4 className='location'>Washington</h4>
                <span className="address">1559 Alabama Ave SE, DC 20032, Washington, USA</span>
                <img src={locationMap} alt="" />
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
