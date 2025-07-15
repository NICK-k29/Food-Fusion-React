import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About' // from previous step
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import CartPage from './components/CartPage'
import Checkout from './pages/Checkout' // Ensure this path is correct
import OrderHistory from './pages/OrderHistory' // Ensure this path is correct

import './App.css' // Ensure you have a CSS file for global styles
import TestimonialSection from './components/TestimonialSection'
import MenuSection from './components/MenuSection'
// import App from './App.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MenuSection />} />
         <Route path="/contact" element={<Contact />} /> 
         <Route path='/login' element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
         {/* <Route path="/" element={<MenuSection />} /> */}
        <Route path="/cart" element={<CartPage />} /> // ✅ This is correct
        <Route path="/orders" element={<OrderHistory />} />

         <Route path="/testimonialSection" element={<TestimonialSection />} />
      
    

      </Routes>
      <Footer />
    </Router>
  )
}

export default App 