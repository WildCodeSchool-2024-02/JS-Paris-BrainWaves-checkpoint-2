import { useLoaderData } from "react-router-dom";

function CupCakesDetails() {
  const datas = useLoaderData();

  return (
    <div className="cupcake-container">
      <div className="cupcake">
        <div className={`accessory ${datas.accessory}`} key={datas.id} />
        <div className="cream">
          <div
            className="cream-1"
            style={{
              backgroundColor: datas.color1,
            }}
          />
          <div
            className="cream-2"
            style={{
              backgroundColor: datas.color2,
            }}
          />
          <div
            className="cream-3"
            style={{
              backgroundColor: datas.color3,
            }}
          />
        </div>
        <div className="bottom">
          <div className="bottom-in">
            <div className="face">
              <div className="eyes">
                <div className="left-eye" />
                <div className="right-eye" />
              </div>
              <div className="mouth" />
            </div>
          </div>
        </div>
      </div>

      <div className="cupcake-name">{datas.name}</div>
    </div>
  );
}

export default CupCakesDetails;
