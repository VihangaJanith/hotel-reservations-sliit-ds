import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { getAllOrders ,deliverOrder, deleteOrder} from "../actions/orderAction";

export default function Orderslist() {
  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { orders, error, loading } = getordersstate;

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div className="container-fluid" style={{backgroundColor: '#FFFF'}}>
      <h2>Reservations List</h2>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      <table className="table table-striped">
        <thead className="thead table-dark">
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Payed Date</th>
            <th>Booked Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                  {order.orderItems.map(item=>{
                        return <div >
                        {item.date}
                        </div>
                    })}
</td>
                  <td>
                    {order.isDelivered ? (
                     (<button className="btn btn-warning"
                    
                     > Active Now </button>)
                    ) : (
                      <button className="btn btn-success"
                      onClick={()=> {dispatch(deliverOrder(order._id))}}
                      > Checked In </button>
                    )}
                  </td>
                  <td>
                  <button className="btn btn-danger"
                    onClick={()=>{dispatch(deleteOrder(order._id))}} >
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
