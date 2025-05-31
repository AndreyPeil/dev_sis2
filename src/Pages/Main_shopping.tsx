import './Main_shopping.css';
import { useNavigate } from "react-router-dom";
import woman1 from "../assets/woman1.png";
import woman2 from "../assets/woman2.png";
import woman3 from "../assets/woman3.png";
import user from "../assets/user.png";
import To_pay from '../Components/To_pay';
import To_recive from '../Components/To_recive';
import To_review from '../Components/To_review';

function Main_shopping() {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="header">
        <h2>Hello, Andrey!</h2>
        <img
          src={user} 
          className="user-avatar"
        />
      </div>

      <div>
        <div className="section-title">My Orders</div>
        <div className="nav">
          <To_pay/>
          <To_recive/>
          <To_review/>
        </div>
      </div>

      <div>
        <div className="section-title">Shop</div>
        <div className="images">
          <div className="shop-card" onClick={() => navigate("/products_listing")}>
            <img src={woman1} alt="Shop 1" />
          </div>
          <div className="shop-card" onClick={() => navigate("/products_listing")}>
            <img src={woman2} alt="Shop 2" />
          </div>
          <div className="shop-card" onClick={() => navigate("/products_listing")}>
            <img src={woman3} alt="Shop 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_shopping;
