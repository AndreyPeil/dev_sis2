

import { useNavigate } from "react-router-dom";

function ok_button() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate('/shopping')}
      >
        Login
      </button>
    </div>
  );
}

export default ok_button;