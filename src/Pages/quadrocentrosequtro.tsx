import BackToShoppingList from "../Components/back_to_shopping_list";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🚫 Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>

      <BackToShoppingList/>
    </div>
  );
}

export default NotFound;
