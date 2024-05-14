import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const data = useLoaderData();
  const [accessories, setAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3310/api/accessories`).then((response) => {
      setAccessories(response.data);
    });
  }, []);

  const handleAccessoryChange = (event) => {
    setSelectedAccessory(event.target.value);
  };

  const filteredCupcakes = data.data.filter(
    (filteredCupcake) => selectedAccessory === filteredCupcake.accessory_id
  );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleAccessoryChange}>
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name};
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {selectedAccessory === ""
          ? data.data.map((cupcake) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake data={cupcake} />
              </li>
            ))
          : filteredCupcakes.map((cupcake) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake data={cupcake} />
              </li>
            ))}
      </ul>
    </>
  );
}

export default CupcakeList;
