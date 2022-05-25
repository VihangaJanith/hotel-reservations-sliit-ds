import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { getAllOrders ,deliverOrder, deleteOrder} from "../actions/orderAction";

import {getAlltaxi, deleteTaxiOrder} from '../actions/taxiActions'

export default function Taxilist() {
  const dispatch = useDispatch();
  const gettaxistate = useSelector((state) => state.getAllTaxiReducer);
  const { taxis, error, loading } = gettaxistate;

  useEffect(() => {
    dispatch(getAlltaxi());
  }, []);

  return (


    <div className="container-fluid" style={{backgroundColor: '#FFFF'}}>
      <h2>Taxi List</h2>
      
      {error && <Error error="something went wrong" />}
      <table className="table table-striped">
        <thead className="thead table-dark">
          <tr>
            <th>Taxi Booking ID</th>
            <th>Customer Name</th>
            <th>Address</th>
            
            <th>Booked Date</th>
            <th>Phone</th>
            <th>Reservation Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {taxis &&
            taxis.map((taxi) => {
              return (
                <tr>
                  <td>{taxi._id}</td>
                <td>{taxi.name}</td>
                  <td>{taxi.address}</td>
 <td>{taxi.date}</td>
                    <td>{taxi.phone}</td>

                   

                    
                
                  <td>{taxi.createdAt.substring(0, 10)}</td>
                  

                  
                  <td>
                  <button className="btn btn-danger"
                    onClick={()=>{dispatch(deleteTaxiOrder(taxi._id))}} >
                      <i className="fa fa-trash" style={{ color: "white" }}></i>
                      &nbsp; Delete Reservation
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
