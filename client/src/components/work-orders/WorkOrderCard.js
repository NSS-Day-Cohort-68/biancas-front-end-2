import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap"
import { getWorkOrders, updateWorkOrder } from "../../managers/orderManager"

export default function WorkOrderCard({ wo, setWoBikeDetails, setWorkOrders }) {
  const handleCompleteWorkOrder = () => {
    const completeWorkOrder = {
      id: wo.id,
      dateInitiated: wo.dateInitiated,
      dateCompleted: new Date(),
      description: wo.description,
      bikeId: wo.bikeId,
    }
    updateWorkOrder(completeWorkOrder)
    getWorkOrders().then((res) => {
      setWorkOrders(res)
    })
  }

  return (
    <section>
      <Card outline color="warning" key={wo.id} style={{ marginBottom: "4px" }}>
        <CardBody>
          <CardTitle tag="h5">
            Bike #{wo.id} -- {wo.dateInitiated.split("T")[0]}
          </CardTitle>
          <CardSubtitle>
            Completed: {wo.dateCompleted === null ? "Open" : ""}
          </CardSubtitle>
          <CardText>Description: {wo.description}</CardText>
          <Button
            color="dark"
            onClick={() => {
              setWoBikeDetails(wo.bikeId)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }}
          >
            Show Details
          </Button>
          <Button
            color="primary"
            onClick={handleCompleteWorkOrder}
            style={{ marginLeft: "5px" }}
          >
            Complete
          </Button>
        </CardBody>
      </Card>
    </section>
  )
}
