import React from "react";

import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {logoutUser} from '../actions/userActions'
import Checkout from './Checkout'


export default function Navibar() {

  const cartstate = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState
  const dispatch = useDispatch();



  return (
    <div>
    <Navbar  bg="dark" variant="dark" expand="lg"  fixed={'top'}>
  <Container>
   
  <Navbar.Brand href="/homepkg" classname="shadow p-3 mb-5 bg-white rounded">Kingsbury Hotel Reservations</Navbar.Brand>
    

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
<Nav className="justify-content-end" > 




{currentUser ? ( <NavDropdown title={currentUser.name} id="collasible-nav-dropdown">
        <NavDropdown.Item href="/ord">Reservations</NavDropdown.Item>
        <NavDropdown.Item href="/taxiord">Taxi Bookings</NavDropdown.Item>
        <NavDropdown.Item href="" onClick={() =>{dispatch(logoutUser())}}>LogOut</NavDropdown.Item>
        {currentUser.isAdmin ? ( <NavDropdown.Divider />):""} 
        {currentUser.isAdmin ? ( <NavDropdown.Item href="/admin/orderslist">Admin Dashboard</NavDropdown.Item>):""}
        {currentUser.isHotelAdmin ? ( <NavDropdown.Divider />):""} 
        {currentUser.isHotelAdmin ? ( <NavDropdown.Item href="/hoteladmin/orderslist"> Hotel Admin Dashboard</NavDropdown.Item>):""}
      </NavDropdown>

) :
( <Nav.Link href="/login">Login</Nav.Link>)}
      
       
     
        
        {cartstate.cartItems.length === 0 ? <Nav.Link>Add to Cart</Nav.Link> : (<Nav.Link  href="/cart">Cart &nbsp; {cartstate.cartItems.length}</Nav.Link>)}
       
      </Nav>
    </Navbar.Collapse>
  </Container>

</Navbar>


    </div>
  );
}
