import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
    const { id } = useParams();
    const [cupcake, setCupcake] = useState("");


  useEffect(() => {

    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCupcake(data);
      })
  }, [id]);

  return (
    <div>
      <h1>Cupcake Details</h1>
      <div>
        <Cupcake data={cupcake}/>
        <p style={{color: "#9d9cdf"}}>My accessory: {cupcake.accessory}.</p>
        <p  style={{color: "#9d9cdf"}}>My colors: {cupcake.color1}, {cupcake.color2}, {cupcake.color3}.</p>
      </div>
    </div>
  );
}

export default CupcakeDetails