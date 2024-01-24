import { useEffect, useState } from "react";
import WorkOrderCard from "./WorkOrderCard";
import { getWorkOrders } from "../../managers/orderManager";

export default function WorkOrderList({ setWoBikeDetails }) {
  const [workOrders, setWorkOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const allWorkOrders = () => {
    getWorkOrders().then((workArr) => {
      setWorkOrders(workArr);
    });
  };

  useEffect(() => {
    allWorkOrders();
  }, []);

  useEffect(() => {
    const showFilteredOrders = workOrders.filter(
      (order) => order.dateCompleted === null
    );
    setFilteredOrders(showFilteredOrders);
  }, [workOrders]);

  return (
    <>
      <div>
        <h2>Work Orders</h2>
        <div>
          {filteredOrders.map((wo) => {
            return (
              <WorkOrderCard
                wo={wo}
                setWoBikeDetails={setWoBikeDetails}
                key={`wo-${wo.id}`}
              ></WorkOrderCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
