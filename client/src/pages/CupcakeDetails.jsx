import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CupcakeDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3310/api/cupcakes/${id}`);

        const detailData = await response.json();
        setDetail(detailData);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <section>
      {detail && (
        <div>
          <h1>{detail.name}</h1>
         
        </div>
      )}
    </section>
  );
}

export default CupcakeDetail;
