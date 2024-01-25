import { useEffect, useState } from "react"
import WorkOrderCard from "./WorkOrderCard"

export default function WorkOrderList({
  setWoBikeDetails,
  workOrders,
  setWorkOrders,
}) {
  // const [workOrders, setWorkOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])

  useEffect(() => {
    const showFilteredOrders = workOrders.filter(
      (order) => order.dateCompleted === null
    )
    setFilteredOrders(showFilteredOrders)
  }, [workOrders])

  return (
    <>
      <div>
        <h2>Work Orders</h2>
        <div>
          {filteredOrders.map((wo) => {
            return (
              <WorkOrderCard
                workOrders={workOrders}
                setWorkOrders={setWorkOrders}
                wo={wo}
                // allWorkOrders={allWorkOrders}
                setWoBikeDetails={setWoBikeDetails}
                key={`wo-${wo.id}`}
              ></WorkOrderCard>
            )
          })}
        </div>
      </div>
    </>
  )
}
