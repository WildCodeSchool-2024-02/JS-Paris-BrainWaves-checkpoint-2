import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cupcake from "../components/Cupcake";

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const cupcakes = useLoaderData();
  const [accessories, setAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  console.info(accessories);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/accessories`)
      .then((response) => response.json())
      .then((data) => setAccessories(data));
  }, []);

  // Step 3: get all accessories
  // Step 5: create filter state

  function handleChange(event) {
    setSelectedAccessory(event.target.value);
  }

  const filteredCupcakes = cupcakes.filter((cupcake) => !selectedAccessory || cupcake.accessory === selectedAccessory)
  //  const filteredCupcakes = cupcakes.filter((cupcake) =>
  //    cupcake.accessory.includes(selectedAccessory)
  //  );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Link to={`/cupcakes/${cupcake.id}`}>
              <Cupcake data={cupcake} />
            </Link>
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
