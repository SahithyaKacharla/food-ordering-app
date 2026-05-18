import "../styles/foodcard.css"
function FoodCard({ item, addToCart }) {
  return (
    <div className="food-card">
      <img
        src={item.image}
        alt={item.name}
      />
      <h2>{item.name}</h2>
      <p>{item.category}</p>
      <div className="food-info">
        <span>₹{item.price}</span>
        <span>⭐ {item.rating}</span>
      </div>
      <button
        onClick={() => addToCart(item)}
      >
        Add To Cart
      </button>
    </div>
  )
}
export default FoodCard