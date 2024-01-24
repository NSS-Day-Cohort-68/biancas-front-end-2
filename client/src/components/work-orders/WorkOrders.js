import { useState } from "react";
import WorkOrderList from "./WorkOrderList";
import WorkOrderBikeDetails from "./WorkOrderBikeDetails";

export default function WorkOrders() {
  const [woBikeDetails, setWoBikeDetails] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <WorkOrderList setWoBikeDetails={setWoBikeDetails} />
        </div>
        <div className="col-sm-4">
          <WorkOrderBikeDetails woBikeDetails={woBikeDetails} />
        </div>
      </div>
    </div>
  );
}
