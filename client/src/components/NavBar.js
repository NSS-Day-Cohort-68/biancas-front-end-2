import { useEffect, useState } from "react";
import { getBikes, getBikesInShopCount } from "../managers/bikeManager.js";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";

export default function NavBar({ loggedInUser, setLoggedInUser }) {
  const [inventory, setInventory] = useState(0);
  const [open, setOpen] = useState(false);
  const [workOrders, setWorkOrders] = useState([])
  
  const toggleNavbar = () => setOpen(!open);


useEffect(()=>{
  getBikesInShopCount().then(workArray=>{
    setWorkOrders(workArray)
  })
},[inventory])

 
  const getInventory = () => {
    const bikesNotDone = workOrders.filter(workOrders=>workOrders.dateCompleted===null)
    const openWorkOrders = bikesNotDone.length
    setInventory(openWorkOrders)
    
  };

  useEffect(() => {
    loggedInUser && getInventory();
  }, [loggedInUser, workOrders, inventory]);

  return (
    <div>
      <Navbar color="light" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
          <img
            src="./bike.png"
            alt="bike"
            height={50}
            style={{ marginRight: "8px" }}
          />
          Bianca's Bike Shop
        </NavbarBrand>
        {loggedInUser ? (
          <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
              <Nav navbar>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/bikes">
                    Bikes
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/workorders">
                    Work Orders
                  </NavLink>
                </NavItem>
                {loggedInUser.isAdmin && (
                  <NavItem onClick={() => setOpen(false)}>
                    <NavLink tag={RRNavLink} to="/users">
                      Users
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
            {loggedInUser.isAdmin ? (<NavbarText style={{ marginRight: "4px" }}>
              Bikes in Garage: {inventory}
            </NavbarText>):("")}
            
            <Button
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                setLoggedInUser(null);
                localStorage.removeItem("biancas_user");
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login">
                <Button color="primary">Login</Button>
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}
