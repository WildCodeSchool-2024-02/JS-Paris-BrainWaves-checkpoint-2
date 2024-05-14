import { useLoaderData, useNavigate } from "react-router-dom";
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
  console.info(useLoaderData());
  const cupcakes = useLoaderData()
  // Step 3: get all accessories
  const [ accessories, setAccessories ] = useState([])
  const [selectedAccessory, setSelectedAccessory] = useState("")
  const [clickedCupcake, setClickedCupcake] = useState("")

  const navigate = useNavigate()
  function handleClick(){
    navigate(`/cupcakes/${clickedCupcake}`)
  }

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data))
  }, [])

  const handleChange = (e) => {
    setSelectedAccessory(e.target.value)
  }
  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" value={selectedAccessory} onChange={handleChange}>
            <option value="">---</option>
            {
              accessories.map((accessory) => (
                <option value={accessory.id} key={accessory.id}>{accessory.name}</option>
              ))
            }
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.filter(cupcake => cupcake.accessory_id.includes(selectedAccessory)).map((cupcake) => (
          <li className="cupcake-item" key={cupcake.name} onClick={() => {
            setClickedCupcake(cupcake.id) 
            handleClick()
          }} role="presentation">
            <Cupcake data={cupcake}/>
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
