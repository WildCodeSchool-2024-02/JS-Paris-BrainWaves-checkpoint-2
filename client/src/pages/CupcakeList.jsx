import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const cupcakes = useLoaderData();
  console.info("testtstsgsftsggsgsgfsd", cupcakes);
  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3310/api/accessories`)
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);
  console.info(accessories);

  // Step 5: create filter state
  const [value, setValue] = useState("");
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value={0}>None</option>
            {accessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {value === 0 ? (
          <>
            {cupcakes.map((cupcake, index) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake data={cupcake} index={index} />
              </li>
            ))}
            <li className="cupcake-item">
              <Cupcake />
            </li>
          </>
        ) : (
          cupcakes
            .filter((cupcake) => value === cupcake.accessory_id)
            .map((cupcake, index) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake data={cupcake} index={index} />
              </li>
            ))
        )}
      </ul>
    </>
  );
}

export default CupcakeList;
