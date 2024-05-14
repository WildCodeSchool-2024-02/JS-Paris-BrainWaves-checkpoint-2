import { NavLink, useLoaderData } from "react-router-dom";
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

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [accessories, setAccessories] = useState([]);
  const [select, setSelect] = useState("");

  const datas = useLoaderData();
  console.info("use", useLoaderData());

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/accessories")
      .then((res) => setAccessories(res.data));
  }, []);

  const filteredCupcakes = datas.filter((data) => {
    if (!select) return true;
    return data.accessory_id === select;
  });

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((data) => (
          <NavLink to={`/cupcakes/${data.id}`} key={data.id}>
            <li className="cupcake-item">
              <Cupcake data={data} />
            </li>
          </NavLink>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
