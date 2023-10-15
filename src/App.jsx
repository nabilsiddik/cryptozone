import './assets/CSS/global.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Layouts
import Header from './Layouts/Header/Header'
import Footer from './Layouts/Footer/Footer'
// Import Pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Pricing from './Pages/Pricing/Pricing'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'





const App = () => {
  return <BrowserRouter>
  <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/*' element={<Error />} />
    </Routes>
  <Footer /> 
  </BrowserRouter>
}

export default App
