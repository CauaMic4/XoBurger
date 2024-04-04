//React
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import HeaderBar from './components/HeaderBar'
import Footer from './components/Footer'

// pages
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Payment from './pages/Payment'
import LandingPage from './pages/LandingPage'
import Menu from './pages/Menu'
import ContactUs from './pages/ContactUs'



function App() {

  return (
    <div>

      <BrowserRouter>
        <HeaderBar />
        {/* <LandingPage /> */}
        <Routes>
          <Route>
            <Route path='/' element={<LandingPage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact_us' element={<ContactUs/>}/>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
