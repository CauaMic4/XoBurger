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
import Product1 from './pages/Product1'
// import Product2 from './pages/Product2'
// import Product3 from './pages/Product3'
// import Product4 from './pages/Product4'



function App() {

  return (
    <div className='myApp'>

      <BrowserRouter>
        <HeaderBar />
        {/* <LandingPage /> */}
        <Routes>
          <Route>
            <Route path='/' element={<LandingPage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<Product1 />} />
            {/* <Route path='/products/:id' element={<Product2 />} />
            <Route path='/products/:id' element={<Product3 />} />
            <Route path='/products/:id' element={<Product4 />} /> */}
            <Route path='/payment' element={<Payment />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact_us' element={<ContactUs />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
