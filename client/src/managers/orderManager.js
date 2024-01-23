

export const getWorkOrders = () => {
    return fetch(`http://localhost:8088/workOrders?_expand=bike`).then((res) => res.json())
}