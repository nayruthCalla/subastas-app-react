import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header'
import Landing from './Pages/Landing/Landing'
import Footer from './Layouts/Footer'
import Products from './Pages/Products/Products'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import About from './Pages/About/About'
import NotFound from './Pages/NotFound/P404'

const App = () => {
  const [dataD, setDataD] = useState([])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="products" element={<Products setDataD={setDataD} />} />
        <Route
          path="products/:detail"
          element={<ProductDetail productDetail={dataD} />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
