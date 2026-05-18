import {
  useState,
  useEffect
} from "react"
import "../styles/cart.css"
function Cart() {
  const [cart, setCart] =
    useState([])
  useEffect(() => {
    const savedCart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || []
    setCart(savedCart)
  }, [])
  const increaseQuantity = (id) => {
    const updatedCart =
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1
            }
          : item
      )
    setCart(updatedCart)
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    )
  }
  const decreaseQuantity = (id) => {
    const updatedCart =
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    setCart(updatedCart)
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    )
  }
  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  )
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>
            Your Cart is Empty 😔
          </h2>
          <p>
            Add some delicious food first.
          </p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />
              <h2>{item.name}</h2>
              <p>₹{item.price}</p>
              <div className="quantity-buttons">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  -
                </button>
                <span>
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h2 className="total-price">
            Total: ₹{totalPrice}
          </h2>
        </>
      )}
    </div>
  )
}
export default Cart