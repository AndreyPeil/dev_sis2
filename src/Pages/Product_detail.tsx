import { useParams } from 'react-router-dom';
import mfw from "../assets/mfw.png";
import "../Pages/product_detail.css";
import Buy from '../Components/Buy';
import BackToShoppingList from '../Components/back_to_shopping_list';
function ProductDetail() {
  const { id } = useParams();

  const product = {
    id,
    title: "Lorem",
    price: "123",
    image: mfw,
    description: "Esse é um chapéu muito estiloso com uma pena vermelha. Perfeito para festas e eventos especiais.",
  };

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <h1 className="product-detail-title">{product.title}</h1>
      <p className="product-detail-price">${product.price}</p>
      <p className="product-detail-description">{product.description}</p>
      <Buy/>
      <BackToShoppingList/>
    </div>
  );
}

export default ProductDetail;
