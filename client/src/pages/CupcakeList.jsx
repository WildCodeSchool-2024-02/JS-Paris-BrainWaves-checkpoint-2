import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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
function CupcakeList() {
  const data = useLoaderData();
  // console.log(data);
  const [allAccessory, setAllAccessory] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3310/api/accessories/`).then((response) => {
      setAllAccessory(response.data);
    });
  }, []);
  const [tabfilter, setTabfilter] = useState("");
  const handleSearch = (e) => {
    setTabfilter(e.target.value);
  };
  const filterdCupcakes = data.filter(
    (filterAccessory) => tabfilter === filterAccessory.accessory_id
  );
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select onChange={handleSearch} id="cupcake-select">
            <option value="">---</option>
            {allAccessory.map((accessory) => (
              <option value={accessory.id} key={accessory.id}>
                {" "}
                {accessory.name}{" "}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {tabfilter === ""
          ? data.map((cupcake) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake
                  color1={cupcake.color1}
                  color2={cupcake.color2}
                  color3={cupcake.color3}
                  name={cupcake.name}
                  accessory={cupcake.accessory}
                  id={cupcake.id}
                />
              </li>
            ))
          : filterdCupcakes.map((cupcake) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake
                  color1={cupcake.color1}
                  color2={cupcake.color2}
                  color3={cupcake.color3}
                  name={cupcake.name}
                  accessory={cupcake.accessory}
                  id={cupcake.id}
                />
              </li>
            ))}
        {/* end of block */}
      </ul>
    </>
  );
}
export default CupcakeList;