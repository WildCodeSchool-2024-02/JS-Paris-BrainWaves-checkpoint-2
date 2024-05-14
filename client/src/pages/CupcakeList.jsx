import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";


/* ************************************************************************* */
const someCupcakes = [];
someCupcakes.push(
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  }
);

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const cupcakes = useLoaderData () || someCupcakes;
  console.info(cupcakes);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
      fetch("http://localhost:3310/api/accessories")
        .then((response) => response.json())
        .then((data) => { setAccessories(data);

      });
  }, []);

  // Step 5: create filter state
  const filteredCupcakes = filter
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === filter)
    : cupcakes;
   

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {filteredCupcakes.map((cupcake, index) => (
             
             <li className="cupcake-item" key={cupcake.id}>
               <Cupcake data={cupcake} index={index} />
             </li>
         ))} 

        {/* Step 5: filter cupcakes before repeating */}
        
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;