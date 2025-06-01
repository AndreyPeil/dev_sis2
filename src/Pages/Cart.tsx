import "./Cart.css";
import Edit from "../Components/Edit";
import Product_in_cart from "../Components/product_in_cart";
import man_in_hat from "../assets/man_in_hat.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

    
  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart <span className="cart-count"></span></h1>

      <h2 className="cart-subtitle">Shipping Address</h2>
      <div className="address-card">
        <div>
          123, Rua dos Chapéus Engraçados, Bairro Chapolim, CH 77
        </div>
        <Edit />
      </div>

      <div className="product-card">
    <Product_in_cart id="1" image={man_in_hat} title="Lorem" price="123" />
<div className="quantity-controller">
          <button className="quantity-button" onClick={handleDecrease}>-</button>
          <input className="quantity-input" type="number" value={quantity} readOnly />
          <button className="quantity-button" onClick={handleIncrease}>+</button>
        </div>
        </div>
        
        <div className="total-price">
          <span>Total Price: </span>
          <span className="price-value">R$ 123,00</span>

      </div>
        <div className="buy-button-container">
            <button onClick={() => {navigate('/payment')}}>Comprar</button>
            </div>
      </div>
    
  );
}

export default Cart;
