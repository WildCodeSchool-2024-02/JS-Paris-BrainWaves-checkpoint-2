import { useLoaderData, useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetail() {
  const id = useParams();
  const cupcakes = useLoaderData();

  const cupcake = cupcakes.filter((content) => content.id === id);

  console.info(id);
  console.info(cupcakes);

  return <Cupcake data={cupcake} />;
}
