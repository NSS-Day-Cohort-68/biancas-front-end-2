import { useEffect, useState } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { getWorkOrders } from "../../managers/orderManager";

export default function WorkOrders() {
  const [workOrders, setWorkOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    getWorkOrders().then((workArr) => {
      setWorkOrders(workArr);
    });
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
        <div>
          {filteredOrders.map((wo) => {
            return (
              <section>
                <Card
                  outline
                  color="warning"
                  key={wo.id}
                  style={{ marginBottom: "4px" }}
                >
                  <CardBody>
                    <CardTitle tag="h5">
                      Bike #{wo.bike.id} -- {wo.dateInitiated.split("T")[0]}
                    </CardTitle>
                    <CardSubtitle>
                      Completed: {wo.dateCompleted === null ? "Open" : ""}
                    </CardSubtitle>
                    <CardText>Description: {wo.description}</CardText>
                  </CardBody>
                  <CardBody color="dark" inverse>
                    <CardTitle tag="h4">{wo.bike.brand}</CardTitle>
                    <p>Color: {wo.bike.color}</p>
                  </CardBody>
                </Card>
            
            
                  
                
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
