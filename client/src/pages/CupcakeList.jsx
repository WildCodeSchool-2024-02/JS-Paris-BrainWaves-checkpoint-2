import { useState, useEffect } from "react";
import Cupcake from "../components/Cupcake";

const someCupcakes = [
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
  },
];

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [accessories, setAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    const fetchCupcakes = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/cupcakes");
        if (!response.ok) {
          throw new Error("Failed to fetch cupcakes");
        }
        const data = await response.json();
        setCupcakes(data);
      } catch (error) {
        console.error("Error fetching cupcakes:", error);
        setCupcakes(someCupcakes);
      } finally {
        setLoading(false);
      }
    };

    fetchCupcakes();
  }, []);

  useEffect(() => {
    const fetchAccessories = async () => {
      const accessoriesData = [
        { id: "4", name: "wcs" },
        { id: "5", name: "christmas-candy" },
      ];
      setAccessories(accessoriesData);
    };

    fetchAccessories();
  }, []);

  const handleFilterChange = (event) => {
    setSelectedAccessory(event.target.value);
  };

  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory === selectedAccessory)
    : cupcakes;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={handleFilterChange}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.name}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
