import { useLoaderData, Link } from "react-router-dom";
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
  const cupcakes = useLoaderData();
  // console.info(cupcakes);
  // Step 1: get all cupcakes

  const [dataAccessories, setDataAccessories] = useState([]);

  useEffect(() => {
    const fetchDataAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        const receptionData = await response.json();
        setDataAccessories(receptionData);
      } catch (error) {
        console.error("Error fetching dataAccessories", error);
      }
    };
    fetchDataAccessories();
  }, []);

  console.info(dataAccessories);

  // Step 3: get all accessories

  // Step 5: create filter state
  const [selectAccessory, setSelectAccessory] = useState("");
  const handleChange = (e) => {
    setSelectAccessory(e.target.value);
  };

  // const filteredAccessories = cupcakes.filter((cupcake) =>
  //   cupcake.accessory === selectAccessory
  // );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectAccessory}
            onChange={handleChange}
          >
            <option value="">---</option>
            {dataAccessories.map((dataAccessory) => (
              <option key={dataAccessory.id} value={dataAccessory.id}>
                {dataAccessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        
        {cupcakes.map((data) => (<Link key={data.id} to={`/CupcakeDetails/${data.id}`}>
          <Cupcake key={data.id} data={data} />
          </Link>
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
