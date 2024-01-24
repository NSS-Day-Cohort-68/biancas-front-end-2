import { useEffect, useState } from "react"
import { getAllUsers } from "../../managers/userManager"
import { UserCard } from "./UserCard"

export const UserList = () => {
  const [allUsers, setAllUsers] = useState([])

  const getAndSetUsers = () => {
    getAllUsers().then((usersArr) => {
      setAllUsers(usersArr)
    })
  }

  useEffect(() => {
    getAndSetUsers()
  }, [])

  return (
    <div className="container">
      <h2>Users</h2>
      {allUsers.map((user) => (
        <UserCard
          user={user}
          getAndSetUsers={getAndSetUsers}
          key={`user-${user.id}`}
        />
      ))}
    </div>
  )
}
