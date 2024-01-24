
import { useState, useEffect } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import { getBikeById } from "../../managers/bikeManager";

export default function WorkOrderBikeDetails({ woBikeDetails }) {
  const [bike, setBike] = useState(null);

  const getBikeDetails = (id) => {
    getBikeById(id).then(setBike);
  };

  useEffect(() => {
    if (woBikeDetails) {
      getBikeDetails(woBikeDetails);
    } 
  }, [ woBikeDetails]);
  

  if (!bike) {
    return (
      <>
        <h2>Bike Details</h2>
        <p>Please choose a bike...</p>
      </>
    );
  }
  return (
    <>
      <h2>Bike Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">{bike.brand}</CardTitle>
          <p>Owner: {bike.user.firstName}</p>
          <p>Address: {bike.user.address}</p>
          <p>Type: {bike.bikeType.name}</p>
          <p>Color: {bike.color}</p>
        </CardBody>
      </Card>
    </>
  )
}