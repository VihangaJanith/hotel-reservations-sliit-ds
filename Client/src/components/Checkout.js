import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch , useSelector} from 'react-redux'
import {placeOrder} from '../actions/orderAction'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import emailjs from 'emailjs-com';
import axios from 'axios';
import  { useEffect, useState } from 'react'

export default function Checkout({subtotal}) {

  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState
    const orderstate = useSelector(state=>state.placeOrderReducer)
    const {loading,error,success} = orderstate
    const [destinations,setdestinations] = useState("");
    const [NewSms, setsms] = useState('')

    const dispatch = useDispatch()

    function tokenHandler(token) {
        console.log(token)
        dispatch(placeOrder(token,subtotal))
    }

   
    function sendSms (e){

      e.preventDefault()
    

	  const destinations=["+94"+currentUser.phone];
      const NewSms ={
      
        destinations:destinations
        
      };
        console.log(NewSms);
        axios.post(
          // "http://localhost:5004/api/sms/send",
          "http://localhost:8290/sms/sendsms",
          NewSms).then(()=>{
          alert("success");
        }).catch((err)=>{
          alert(err);
        })
      
      
      }



    function emailsend (e){
    
  
      e.preventDefault();
    
      emailjs.sendForm('service_sy66xoc', 'template_fdhg1ym', e.target, 'user_iKzC1886DPbUEbUDzO1bY')
        .then((result) => {
          
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset(); 

      
      }
  
  
if(success==true){

  document.getElementById('btn1').click();
  document.getElementById('btn2').click();
 
  }




  return (
    <div >
        {loading && (<Loading/>)}

{success && (<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Hotel Reservation Successfull</strong> 
        

</div>) }

{error && (<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Please Login To Place Orders</strong> 

</div>)}

    <StripeCheckout
        
        amount={subtotal * 100}
        shippingAddress
               token={tokenHandler}
        stripeKey='pk_test_51Kry14IppFV46PpQTbz9VzLa6keUgGlGtRyUYcQNrxjBBpzN33DaO8mgGbJFXVmL3EmYb4chPIrcLFRFfNbvRNNO00PTpkrLAU'
        currency="LKR"
 >
       
        
           
            <button  type='submit' className="btn btn-danger">Pay Now</button>
            
            
        </StripeCheckout>

        <div>
        <form onSubmit={emailsend}>
              <input name="email1" value={currentUser.email} style={{visibility:"hidden"}}></input>
            <button  id='btn1' type='submit' className="btn btn-danger" style={{visibility:"hidden"}}>Email</button>
            </form>

        <form onSubmit={sendSms}>
            
            <button style={{visibility:"hidden"}} id='btn2' type='submit' className="btn btn-danger">Sms</button>
            </form>
            </div>
    </div>
  )
}
