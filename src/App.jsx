import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Cart from "./pages/Cart"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App