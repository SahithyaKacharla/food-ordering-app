import { Link } from "react-router-dom"

import { useState } from "react"

import "../styles/Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <h2>Foodie</h2>
      <div className={menuOpen ? "active" : ""}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </div>
      <div
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>

    </nav>
  )
}
export default Navbar