const apiUrl = "http://localhost:8088/bikes";

export const getBikes = () => {
  return fetch(`${apiUrl}?_expand=user`).then((res) => res.json());
};

export const getBikeById = (id) => {
  return fetch(`${apiUrl}/${id}?_expand=user&_expand=bikeType&_embed=workOrders`).then((res) => res.json());
};


export const getBikeTypes = () => {
  return fetch("http://localhost:8088/bikeTypes").then((res) => res.json())
}

export const postNewBike = (newBikeObj) => {
    const options = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newBikeObj)
    }
    return fetch("http://localhost:8088/bikes", options)
}