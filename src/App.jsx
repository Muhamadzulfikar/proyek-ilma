import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './pages/landingPage'

function App() {

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
