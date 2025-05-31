import Card_product from "../Components/Card_product";
import man_in_hat from "../assets/man_in_hat.png"
import mfw from "../assets/mfw.png";
import cock_hat from "../assets/cock_hat.png";
import rahh from "../assets/rahhh.png";
import borger from "../assets/canhasborger.png"
import cowboy from "../assets/cowboy.png"
import shak from "../assets/shak.png"
import mario from "../assets/mario.png"


import '../Pages/products.css'
function ProductsListing() {
  return (
    <>
    <h1>Shop</h1>
    <div className="shop">
      
      <Card_product id="1" image={man_in_hat} title="German" price="123" />
      <Card_product id="2" image={mfw} title="me irl" price="999999" />
      <Card_product id="3" image={cock_hat} title="nice cock" price="66" />
      <Card_product id="4" image={rahh} title="rahh" price="1000" />
      <Card_product id="5" image={borger} title="borgoer" price="911" />
      <Card_product id="6" image={cowboy} title="cowbow" price="1773" />
      <Card_product id="7" image={shak} title="shak" price="10,3" />
      <Card_product id="8" image={mario} title="its a me" price="1992" />
      
      </div>
      </>
  );
}

export default ProductsListing;