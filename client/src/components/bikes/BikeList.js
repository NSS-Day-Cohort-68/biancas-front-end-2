import { useState, useEffect } from "react";
import BikeCard from "./BikeCard";
import { getBikes } from "../../managers/bikeManager";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Bikes.css"

export default function BikeList({ setDetailsBikeId, loggedInUser }) {
  const [bikes, setBikes] = useState([]);
  const [userBikes, setUserBikes] = useState([])

  const getAllBikes = () => {
    getBikes().then((res) => setBikes(res));
  };

  useEffect(() => {
    getAllBikes();
  }, []);

  

  useEffect(() => {
    const uBikes = bikes.filter(bike =>
      bike.userId === loggedInUser.id)
    setUserBikes(uBikes)
  }, [bikes, loggedInUser])

  return (
    <>
      <div className="bikes-col-header-bar">
        <h2>Bikes</h2>
        <Link to={"/newBike"}>
          <Button color="primary">New Bike</Button>
        </Link>
      </div>
      {loggedInUser.isAdmin ?
      bikes.map((bike) => (
        <BikeCard
          bike={bike}
          setDetailsBikeId={setDetailsBikeId}
          key={`bike-${bike.id}`}
        ></BikeCard>
      ))
      :
      userBikes.map((bike) => (
        <BikeCard
          bike={bike}
          setDetailsBikeId={setDetailsBikeId}
          key={`bike-${bike.id}`}
        >
        </BikeCard>
      ))
      }
    </>
  );
}
