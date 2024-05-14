import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetailPage() {
  const cupcake = useLoaderData();
  return <Cupcake data={cupcake} />;
}

export default CupcakeDetailPage;
