export const getWorkOrders = () => {
  return fetch(`http://localhost:8088/workOrders?_expand=bike`).then((res) =>
    res.json()
  )
}

export const updateWorkOrder = (wo) => {
  return fetch(`http://localhost:8088/workOrders/${wo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wo),
  })
}
