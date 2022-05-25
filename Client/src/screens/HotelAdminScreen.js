import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Link, Route , Switch } from 'react-router-dom';

import Orderslist from './Orderslist';
import Userslist from './Userslist';


import Packageslist from './Packageslist';
import Addpackage from './Addpackage';
import Editpackage from './Editpackage';




export default function HotelAdminscreen() {

    const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState
    const dispatch = useDispatch();

    useEffect(() => {
        if(!currentUser.isHotelAdmin){
            window.location.href = '/'
        }

    })
    
  return (
    <div className="mt-5"> 
        
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-success " style={{backgroundColor: "black"}}>
  <a className="navbar-brand " href="/orderslist">Admin Panel</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center text-left" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item mr-2 ">
        <Link className="nav-link " to="/hoteladmin/packageslist">Packages List</Link>
      </li>
      <li className="nav-item mr-2">
        <Link className="nav-link" to="/hoteladmin/addpackage">Add New Package</Link>
      </li>
      <li className="nav-item mr-2">
        <Link className="nav-link " to="/hoteladmin/orderslist">Reservations List</Link>
      </li>
    </ul>
    
  </div>
</nav>

<Switch>
        {/* <Route path="/admin" component={Pizzaslist} /> */}
        <Route path="/hoteladmin/userslist" component={Userslist} />
      
        <Route path="/hoteladmin/orderslist" component={Orderslist} />
     

        <Route path="/hoteladmin/addpackage" component={Addpackage} />
        <Route path="/hoteladmin/packageslist" component={Packageslist} />
        <Route path="/hoteladmin/editpackage/:packageid" component={Editpackage} />



    </Switch>
    </div>
  )
}
