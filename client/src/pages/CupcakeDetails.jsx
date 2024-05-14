import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";


function CupcakeDetails() {
   const soloCupcake = useLoaderData();
   console.info(soloCupcake)
    
    return (
        <div>
            <h1>{soloCupcake.data.name}</h1>
          <Cupcake data={soloCupcake.data}/>
        </div>
    );
}

export default CupcakeDetails;