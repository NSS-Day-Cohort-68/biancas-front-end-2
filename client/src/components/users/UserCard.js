import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap"
import { updateUser } from "../../managers/userManager"

export const UserCard = ({ user, getAndSetUsers }) => {
  return (
    <Card color="dark" outline style={{ marginBottom: "10px" }}>
      <CardBody>
        <CardTitle tag="h5">
          {user.firstName} {user.lastName}
        </CardTitle>
        <CardText>{user.email}</CardText>
      </CardBody>
      {user.isAdmin && (
        <Button
          color="dark"
          onClick={async () => {
            user.isAdmin = !user.isAdmin
            await updateUser(user)
            getAndSetUsers()
          }}
        >
          Demote
        </Button>
      )}
      {!user.isAdmin && (
        <Button
          color="dark"
          onClick={async () => {
            user.isAdmin = !user.isAdmin
            await updateUser(user)
            getAndSetUsers()
          }}
        >
          Promote
        </Button>
      )}
    </Card>
  )
}
