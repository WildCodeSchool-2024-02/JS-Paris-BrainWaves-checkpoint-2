import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetail() {
  const cupcake = useLoaderData();

  console.info(cupcake);

  return <Cupcake data={cupcake} />;
}
