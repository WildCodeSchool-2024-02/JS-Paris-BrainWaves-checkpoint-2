import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const cupcakeData = useLoaderData();

  return (
    <>
      <h1>{cupcakeData.data.name}</h1>
      <Cupcake
        data={{
          accessory: cupcakeData.data.accessory,
          color1: cupcakeData.data.color1,
          color2: cupcakeData.data.color2,
          color3: cupcakeData.data.color3,
          name: cupcakeData.data.name,
        }}
      />
    </>
  );
}

export default CupcakeDetails;
