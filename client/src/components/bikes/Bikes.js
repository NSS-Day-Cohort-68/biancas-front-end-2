import { useState } from "react";
import BikeList from "./BikeList";
import BikeDetails from "./BikeDetails";

export default function Bikes({ loggedInUser }) {
  const [detailsBikeId, setDetailsBikeId] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <BikeList loggedInUser={loggedInUser} setDetailsBikeId={setDetailsBikeId} />
        </div>
        <div className="col-sm-4">
          <BikeDetails detailsBikeId={detailsBikeId} />
        </div>
      </div>
    </div>
  );
}
