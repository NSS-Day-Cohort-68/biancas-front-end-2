import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { getBikeTypes, postNewBike } from "../../managers/bikeManager";
import { useNavigate } from "react-router-dom";

export default function NewBike({ loggedInUser }) {
    const navigate = useNavigate()

    const [userId, setUserId] = useState(0)
    const [bikeObj, setBikeObj] = useState(
        {
            brand: '',
            color: '',
            bikeTypeId: 0
        }
    )
    const [bikeTypes, setBikeTypes] = useState([])

    const handleInput = (event) => {
        const copy = {...bikeObj}
        copy[event.target.name] = event.target.value
        setBikeObj(copy)
    }

    const handleSubmit = () => {
        if (bikeObj.brand === '' || bikeObj.color === '' || bikeObj.bikeTypeId === 0 ) {
            window.alert("Please fill in all form fields")
        } else {
        const newBikeObj = {
                brand: bikeObj.brand,
                userId: userId,
                color: bikeObj.color,
                bikeTypeId: bikeObj.bikeTypeId
        }
        postNewBike(newBikeObj)
        navigate("/bikes")
        }
    }

    useEffect(()=>{
        getBikeTypes().then((res) => 
        setBikeTypes(res))
    }, [])

    useEffect(()=>{
        setUserId(loggedInUser.id)
    }, [loggedInUser])

    return (
    <div className="newBike-form-container">
        <form>
            <fieldset>
                <div className="form-group">
                    <label>Brand:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="brand"
                        required
                        placeholder="What brand is your bike?"
                        onChange={handleInput}
                    ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Color:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="color"
                        required
                        placeholder="What color is your bike?"
                        onChange={handleInput}
                    ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Type</label>
                    <select 
                        className="form-control"
                        name="bikeTypeId"
                        required
                        onChange={handleInput}
                    >
                        <option key={0} value={0}>Choose a bike type...</option>
                        {bikeTypes.map((type => {
                           return <option key={type.id} value={type.id}>{type.name}</option>
                        }))}
                    </select>
                </div>
            </fieldset>
            <div className="submit-btn-container">
                <Button color="primary" onClick={handleSubmit}>Submit</Button>
            </div>
        </form>
    </div>
    )
}