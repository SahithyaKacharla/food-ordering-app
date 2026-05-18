import "../styles/Home.css"
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="hero">
      <h1>
        Delicious Food Delivered Fast
      </h1>
      <p>
        Order your favorite meals anytime,
        anywhere.
      </p>
      <Link to="/menu">
        <button>
          Explore Menu
        </button>
      </Link>
    </div>
  )
}
export default Home
