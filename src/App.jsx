import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.body.style.zoom = "80%";
    return () => {
      document.body.style.zoom = "100%";
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:slug' element={<Details />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App