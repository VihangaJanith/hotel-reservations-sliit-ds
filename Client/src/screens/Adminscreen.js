import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Link, Route , Switch } from 'react-router-dom';

import Orderslist from './Orderslist';
import Userslist from './Userslist';



export default function Adminscreen() {

    const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState
    const dispatch = useDispatch();

    useEffect(() => {
        if(!currentUser.isAdmin){
            window.location.href = '/'
        }

    })
    
  return (
    <div className="mt-5"> 
        
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-success " style={{backgroundColor: "black"}}>
  <a className="navbar-brand " href="/admin/userslist">Admin Panel</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center text-left" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item  mr-2">
          <Link className="nav-link" to="/admin/userslist">Userslist </Link>
        {/* <a className="nav-link" href="/admin/userslist">Users List <span className="sr-only">(current)</span></a> */}
      </li>
      <li className="nav-item mr-2 ">
        <Link className="nav-link " to="/admin/packageslist">Packages List</Link>
      </li>
      <li className="nav-item mr-2">
        <Link className="nav-link" to="/admin/addpackage">Add New Package</Link>
      </li>
      <li className="nav-item mr-2">
        <Link className="nav-link " to="/admin/orderslist">Reservations List</Link>
      </li>

      <li className="nav-item mr-2">
        <Link className="nav-link " to="/admin/taxilist">Taxi List</Link>
      </li>
    </ul>
    
  </div>
</nav>

{/* <Switch>
        {/* <Route path="/admin" component={Pizzaslist} /> 
        
        <Route path="/admin/userslist" component={Userslist} />
        <Route path="/admin/pizzaslist" component={Pizzaslist} />
        <Route path="/admin/addpizza" component={Addpizza} />
        <Route path="/admin/orderslist" component={Orderslist} />
        <Route path="/admin/editpizza/:pizzaid" component={Editpizza} />

        <Route path="/admin/edpizza/:pizzaid" component={Edpizza} />

        <Route path="/admin/edit/:pizzaid" component={Edit} />
    </Switch> */}
    </div>
  )
}
