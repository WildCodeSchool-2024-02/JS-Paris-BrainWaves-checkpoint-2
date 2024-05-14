import { useParams, useLoaderData } from "react-router-dom";

function CupcakeDetails() {
  const { id } = useParams();
  const cupcake = useLoaderData().filter(
    (_cupcake) => _cupcake.id === Number(id)
  )[0];

  return (
    <div>
      <h1> CupCake Name</h1>
      <h2>- {cupcake.name}</h2>
    </div>
  );
}

export default CupcakeDetails;
