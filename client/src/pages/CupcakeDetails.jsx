import { useLoaderData, useParams } from "react-router-dom";

function CupcakeDetails(){
    const { id } = useParams();
    const cupcake = useLoaderData().filter((cpk) => cpk.id === Number(id))[0]

    /*
    {
        "id": 2,
        "accessory_id": "3",
        "accessory": "chocolate",
        "color1": "black",
        "color2": "yellow",
        "color3": "red",
        "name": "Belgium"
    }
    */
    return (
        <>
            <h1>{cupcake.name}</h1>
            <p>ID : {cupcake.id}</p>
            <p>Accessory : {cupcake.accessory}</p>
            <p>Colors : {cupcake.color1}, {cupcake.color2}, {cupcake.color3}</p>
        </>
    )
}


export default CupcakeDetails;
