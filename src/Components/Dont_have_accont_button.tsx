import { useNavigate } from "react-router-dom";

function DontHaveAccountButton() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-sm text-gray-600">Não tem uma conta?</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => navigate("/create")}>
        Criar conta
      </button>
    </div>
  );
}

export default DontHaveAccountButton;