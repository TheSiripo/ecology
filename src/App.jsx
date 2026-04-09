import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Problems from './pages/Problems'
import Tips from './pages/Tips'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}
