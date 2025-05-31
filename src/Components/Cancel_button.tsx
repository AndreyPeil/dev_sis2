import { useNavigate } from "react-router-dom";

function Cancel_button() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600" onClick={() => navigate("/")}>
      
        Cancelar
      </button>
    </div>
  );
}

export default Cancel_button;