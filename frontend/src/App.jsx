import { Routes, Route } from 'react-router-dom'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import Support from './landing_page/support/SupportPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import NotFound from './landing_page/NotFound.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
