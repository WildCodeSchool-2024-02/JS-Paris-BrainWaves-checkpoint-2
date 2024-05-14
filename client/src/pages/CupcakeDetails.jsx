import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import "./cupcake-details.css";

function CupcakeDetails() {
  const detail = useLoaderData();
  return (
    <>
      <h1>{detail.name}</h1>
      <div className="cupcake-desc">
        <Cupcake data={detail} />
        <div className="cupcake-info">
          <p>ID : {detail.id}</p>
          <p>Accessory : {detail.accessory}</p>
          <p>
            Colors : {detail.color1} , {detail.color2} , {detail.color3}
          </p>
        </div>
      </div>
    </>
  );
}

export default CupcakeDetails;
