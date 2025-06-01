import Edit from "../Components/Edit";
import Product_in_cart from "../Components/product_in_cart";
import "./Shipping_andContact.css";
import man_in_hat from "../Assets/man_in_hat.png";
import BackToShoppingList from "../Components/back_to_shopping_list";

function Shipping_andContact() {
  return (
    <div className="shipping-contact-container">
      <div className="info-card">
        <div className="info-text">
          <h2 className="info-title">Shipping Address</h2>
          <p>Rua dos Chapéus, Bairro Central</p>
          <p>Chapolim City, CH 77777</p>
        </div>
        <Edit />
      </div>

      <div className="info-card">
        <div className="info-text">
          <h2 className="info-title">Contact Information</h2>
          <p>+55 999999999</p>
          <p>aa@aa.com</p>
        </div>
        <Edit />
      </div>
      <h3>Itens</h3>
      <Product_in_cart id="1" image={man_in_hat} title="Lorem" price="123" />

      <h3>Shopping Options</h3>
      <div className="shipping-options">
        <div className="option">
          <input type="radio" id="standard" name="shipping" value="standard" />
          <label htmlFor="standard">Standard Shipping 5-7 days Free</label>
        </div>
        <div className="option">
          <input type="radio" id="express" name="shipping" value="express" />
          <label htmlFor="express">Express Shipping 1-2 days $12</label>
        </div>
    </div>
    <h3>Payment Method</h3>
<div className="shipping-options">
  <div className="option">
    <input type="radio" id="pix" name="payment" value="pix" />
    <label htmlFor="pix">Pix</label>
  </div>
  <div className="option">
    <input type="radio" id="boleto" name="payment" value="boleto" />
    <label htmlFor="boleto">Boleto</label>
  </div>
</div>
<h3>total: $123</h3>
      <button onClick={() => {alert('comprado')}}>comprar</button>
    
    <BackToShoppingList/>
</div>
  );
}

export default Shipping_andContact;
