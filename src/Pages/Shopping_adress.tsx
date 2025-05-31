import '../Pages/shopping_adress.css'
import { useNavigate } from 'react-router-dom';

function ShoppingAddress() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/cart');
  };

  return (
    <div className="shopping-address">
      <h2>Endereço de Entrega</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado</label>
          <input type="text" id="state" name="state" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">Telefone</label>
          <input type="int" id="Telefone" name="Telefone" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">E-mail</label>
          <input type="email" id="E-mail" name="E-mail" required />
        </div>
        
        <button type="submit">Salvar Endereço</button>
      </form>
    </div>
  );
}
export default ShoppingAddress;