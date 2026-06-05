import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'
import useReveal from './hooks/useReveal.js'
import Home from './pages/Home.jsx'
import ProductInfinity from './pages/ProductInfinity.jsx'

export default function App() {
  useReveal()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/infinity-school-manager" element={<ProductInfinity />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
