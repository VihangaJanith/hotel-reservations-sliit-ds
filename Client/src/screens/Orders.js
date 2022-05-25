
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {getUserOrders, deleteOrder} from '../actions/orderAction'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { Link } from "react-router-dom";

export default function Orders() {

    const dispatch = useDispatch()

    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const {orders,error,loading} = orderstate
    


  useEffect(() => {
     dispatch(getUserOrders())


  },[])
  return (
  
    <div className="wrapper" >
    <div  style={{marginTop:"70px"}}>
        <h2  style={{fontSize:"35px"}}>My Reservations</h2>
        <hr/>

<div className="row justify-content-center">
    {loading && (<Loading/>)}
    {error && (<Error error="something went wrong"/>)}
    {orders && orders.map(order=>{
        return <div className="col-md-8 m-2 rounded-lg" style={{backgroundColor:"dimgray",
        color:"white"}}>
            <div className="flex-container">
                <div className="text-left w-100 m-1 p-1" >
                    <h2 style={{fontSize: "25px" }}>Hotel Packages</h2>
                    <hr/>
                    {order.orderItems.map(item=>{
                        return <div >
<p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>

                        <p>Dates : {item.date}</p>
                        </div>
                    })}
                    </div>
                    


                    <div   className="text-left w-100 m-1 p-1 ">
                   
                     <h2 style={{fontSize: "25px" }}>Address</h2>
                     <hr/>
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>Zipcode : {order.shippingAddress.pincode}</p>   
                    </div>


                    <div  className="text-left w-100 m-1 p-1 ">
                   
                    <h2 style={{fontSize: "25px" }}>Reservation Info</h2> <hr/>
                    <p>Reservation Amount : Rs. {order.orderAmount} /=</p>
                    <p>Payment Date : {order.createdAt.substring(0,10)}</p>
                    <p>Transaction ID : {order.transactionId}</p>
                    <p>Order ID : {order._id}</p>


                    <button className="btn btn-danger"
                    onClick={()=>{dispatch(deleteOrder(order._id))}} >
                      <i className="fa fa-trash" style={{ color: "white" }}></i>
                      &nbsp; Cancel Reservation
                    </button>


                    </div>

                    <div className="text-left w-100 m-1 p-1 "> 

                    <Link to={`/taxy/${order._id}`} className>
                      <button className="btn btn-warning">
                    Click here if you want Taxy Service
                      </button>
                    </Link>
                    </div>

            </div>
        </div>

    })}

</div>
        

    </div>
    </div>
  )
}
