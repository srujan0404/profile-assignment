import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

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