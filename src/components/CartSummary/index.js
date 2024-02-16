// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (accumulator, curValue) =>
          accumulator + curValue.price * curValue.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <div className="sub-cart-summary-container">
            <h1 className="cart-summary-total-price">
              Order Total: Rs {totalPrice}/-
            </h1>
            <p className="cart-items-count">{cartList.length} Items in cart</p>
          </div>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
