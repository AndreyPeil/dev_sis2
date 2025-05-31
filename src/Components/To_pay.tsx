import { useNavigate } from "react-router-dom";

function To_pay() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate("/payment")}
      >
        To Pay
      </button>
    </div>
  );
}

export default To_pay;