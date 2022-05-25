import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {getOrderedTaxi, deleteTaxiOrder} from '../actions/taxiActions'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function OrderedTaxi() {

        const dispatch = useDispatch()

    const orderedtaxistate = useSelector(state=>state.getOrderedTaxireducer)
    const {taxis,error,loading} = orderedtaxistate
    


  useEffect(() => {
     dispatch(getOrderedTaxi())


  },[])
  return (
    <div className="mt-5 container text-left">
        
        

        
    <div   className="text-left w-100 m-1 p-1 mt-5 ">
        
                   
                   <h2 className="mt-3" style={{fontSize: "25px" }}>Booked Taxi Services</h2>
                   <hr/>
                 
                
                  </div>
                  {taxis && taxis.map((taxi,index)=>{
        return <div className="col-md-8 m-2" style={{backgroundColor:"dimgray",
        color:"white" , borderRadius:"15px"}}>
            <div className="flex-container">
            
                


                    <div  className="row text-left w-100 m-1 p-4 ">
                   
                   <div className="col-8">
                    
                    <h2 style={{fontSize: "25px" }}> {index+1}) Booked Taxi Info</h2> <hr/>
                    <p>Address: {taxi.address}</p>
                    <p>Booking date  : {taxi.date}</p>
                    <p> Booking Created Date : {taxi.createdAt.substring(0,10)}</p>
                    </div>

                    <div className="col">
                    <button className="btn btn-danger"
                    onClick={()=>{dispatch(deleteTaxiOrder(taxi._id))}} >
                      <i className="fa fa-trash" style={{ color: "white" }}></i>
                      &nbsp; Cancel Taxi Reservation
                    </button>
                    
                    </div>

                    </div>

                    

            </div>
        </div>

    })}
        
        
        </div>
  )
}
