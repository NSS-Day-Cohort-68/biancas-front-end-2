import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function WorkOrderCard({ wo, setWoBikeDetails }) {
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
              setWoBikeDetails(wo.bikeId);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Show Details
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
