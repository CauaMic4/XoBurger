//React
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import HeaderBar from './components/HeaderBar'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <LandingPage />
        <Routes>
          <Route>

          </Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
