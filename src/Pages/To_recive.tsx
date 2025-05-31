import progressImg from "../assets/progress.png";
import BackToShoppingList from "../Components/back_to_shopping_list";
import "./to-recive.css";

function To_recivepag() {
  return (
    <div className="to-receive-container">
      <h1 className="title"> To Receive</h1>
      <img src={progressImg} alt="Progress" className="progress-image" />
      <p className="tracking-number">Tracking: <strong>LGS-i666694206969</strong></p>

      <section className="status-list">
        <article className="status-card active">
          <div className="status-info">
            <h3>Packed</h3>
            <p>Ta indo meu</p>
          </div>
          <span className="status-date">April 19, 12:31</span>
        </article>

        <article className="status-card">
          <div className="status-info">
            <h3>Shipped</h3>
            <p>Ta indo teu</p>
          </div>
          <span className="status-date">April 19, 16:20</span>
        </article>

        <article className="status-card">
          <div className="status-info">
            <h3>Delivered</h3>
            <p>Ta indo piá</p>
          </div>
          <span className="status-date">April 19, 19:07</span>
        </article>

        <article className="status-card completed">
          <div className="status-info">
            <h3>Received</h3>
            <p>Chegou em meu</p>
          </div>
          <span className="status-date">April 20</span>
        </article>
        
      </section>
      <BackToShoppingList/>
    </div>
  );
}

export default To_recivepag;
