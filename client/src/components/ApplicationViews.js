import { Route, Routes } from "react-router-dom"
import Bikes from "./bikes/Bikes"
import { AuthorizedRoute } from "./auth/AuthorizedRoute"
import Login from "./auth/Login"
import Register from "./auth/Register"
import WorkOrders from "./work-orders/WorkOrders"
import { UserList } from "./users/UserList"
import { BikeTypesList } from "./bikes/BikeTypesList"
import NewBike from "./bikes/NewBike";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Bikes loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="bikes"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Bikes loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />
        <Route
          path="bike-types"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <BikeTypesList loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />
        <Route 
          path="newBike" 
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <NewBike loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />

        <Route
          path="workorders"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <WorkOrders />
            </AuthorizedRoute>
          }
        />
        <Route
          path="users"
          element={
            <AuthorizedRoute admin={true} loggedInUser={loggedInUser}>
              <UserList />
            </AuthorizedRoute>
          }
        />
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  )
}
