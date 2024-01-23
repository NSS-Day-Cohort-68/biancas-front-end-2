const apiUrl = "http://localhost:8088/bikes";

export const getBikes = () => {
  return fetch(`${apiUrl}?_expand=user`).then((res) => res.json());
};

export const getBikeById = (id) => {
  return fetch(`${apiUrl}/${id}?_expand=user&_expand=bikeType&_embed=workOrders`).then((res) => res.json());
};

export const getBikesInShopCount = () => {
  //add implementation here...
};
