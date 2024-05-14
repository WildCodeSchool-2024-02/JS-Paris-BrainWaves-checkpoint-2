import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCupcake(data);
      });
  }, []);
  return (
    <div>
      <h1>{cupcake.name}</h1>
      <Cupcake data={cupcake} />
    </div>
  );
}
export default CupcakeDetails;
