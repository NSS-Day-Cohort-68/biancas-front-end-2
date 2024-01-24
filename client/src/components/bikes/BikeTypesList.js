import { useEffect, useState } from "react"
import { createNewBikeType, getBikeTypes } from "../../managers/bikeManager"
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap"

export const BikeTypesList = ({ loggedInUser }) => {
  const [bikeTypes, setBikeTypes] = useState([])
  const [newBikeType, setNewBikeType] = useState("")

  const getAllBikeTypes = () => {
    getBikeTypes().then((res) => setBikeTypes(res))
  }

  useEffect(() => {
    getAllBikeTypes()
  }, [])

  const handleNewBikeType = () => {
    const checkBikeArray = bikeTypes.filter(
      (type) => type.name.toLowerCase() === newBikeType.toLowerCase()
    )
    if (checkBikeArray.length === 0) {
      const newBikeTypeObj = {
        id: bikeTypes.length + 1,
        name: newBikeType,
      }
      createNewBikeType(newBikeTypeObj).then(getAllBikeTypes())
    } else {
      window.alert("This Type is already in the database")
    }
  }

  return (
    <>
      <div className="container">
        <h2>Bike Types</h2>
        <div>
          <Button
            style={{ marginBottom: "10px", marginRight: "10px" }}
            color="dark"
            onClick={() => {
              handleNewBikeType()
            }}
          >
            Add New Type
          </Button>
          <input
            size={30}
            type="text"
            placeholder="Please enter a New Bike Type"
            value={newBikeType}
            onChange={(event) => setNewBikeType(event.target.value)}
          ></input>
        </div>
        {bikeTypes.map((bikeTypeObj) => (
          <Card
            key={bikeTypeObj.id}
            color="dark"
            outline
            style={{ marginBottom: "10px" }}
          >
            <CardBody>
              <CardTitle tag="h5">{bikeTypeObj.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                ID: {bikeTypeObj.id}
              </CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}
