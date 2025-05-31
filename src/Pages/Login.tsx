import Cancel_button from "../Components/Cancel_button";
import '../Pages/Login.css';
import Ok_button from "../Components/ok_button";
function Login() {
  return (
    <>
    <div className="background"> 
    <h1>LOGIN</h1>
    <h6>Good to see you back 💖</h6>
    <Ok_button />
    <br/>
    <Cancel_button/>


    </div>
    
    </>
  );
}

export default Login;