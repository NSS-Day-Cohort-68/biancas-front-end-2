const apiUrl = "http://localhost:8088/bikes";

export const getBikes = () => {
  return fetch(`${apiUrl}?_expand=user&_expand=bikeType`).then((res) => res.json());
};

export const getBikeById = (id) => {
  return fetch(`${apiUrl}/${id}?_expand=user&_expand=bikeType&_embed=workOrders`).then((res) => res.json());
};

export const getBikesInShopCount = () => {
    return fetch(` http://localhost:8088/workOrders`).then((res)=>res.json())
};
