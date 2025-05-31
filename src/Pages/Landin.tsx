import DontHaveAccountButton from "../Components/Dont_have_accont_button";
import Get_started_button from "../Components/Get_started_button";
import sacola from "../assets/sacola.png";

function Landing() {
  return (
    <>
      <div className="landing_box">
        <img
          src={sacola} 
          alt="Landing Image"
          className="landing_image"
        />
        <h1>ShopeeAmf</h1>
        <p>A loja online de roupas do recanto</p>
        <Get_started_button />
        <DontHaveAccountButton />
      </div>
    </>
  );
}

export default Landing;