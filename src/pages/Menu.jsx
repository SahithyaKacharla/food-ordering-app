import { useState } from "react"
import foodData from "../data/foodData"
import FoodCard from "../components/FoodCard"
import SearchBar from "../components/SearchBar"
import "../styles/menu.css"
function Menu() {
  const [search, setSearch] =
    useState("")
  const [category, setCategory] =
    useState("All")
  const addToCart = (item) => {
    let cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || []
    const existingItem =
      cart.find(
        (cartItem) =>
          cartItem.id === item.id
      )
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        ...item,
        quantity: 1
      })
    }
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )
    alert("Item Added To Cart")
  }
  return (
    <div>
      <h1>Our Menu</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
      <div className="categories">
        <button
          onClick={() =>
            setCategory("All")
          }
        >
          All
        </button>
        <button
          onClick={() =>
            setCategory("Burger")
          }
        >
          Burger
        </button>
        <button
          onClick={() =>
            setCategory("Pizza")
          }
        >
          Pizza
        </button>
        <button
          onClick={() =>
            setCategory("Pasta")
          }
        >
          Pasta
        </button>
        <button
          onClick={() =>
            setCategory("Drinks")
          }
        >
          Drinks
        </button>
      </div>
      <div className="food-container">
        {foodData
          .filter((item) => {
            const matchesSearch =
              item.name
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            const matchesCategory =
              category === "All" ||
              item.category === category
            return (
              matchesSearch &&
              matchesCategory
            )
          })
          .map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))}
      </div>
    </div>
  )
}
export default Menu