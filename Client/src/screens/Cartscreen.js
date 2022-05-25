import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart } from '../actions/cartActions';
import {deleteFromCart} from '../actions/cartActions';
import Checkout from '../components/Checkout'

export default function Cartscreen() {

    const cartstate = useSelector(state => state.cartReducer);
    const cartItems = cartstate.cartItems;

    var subtotal = cartItems.reduce((total,item)=>total+item.price,0);
    const dispatch = useDispatch();

    


  

  
    return (
    <div className="row justify-content-center" style={{marginTop:"70px"}}>
        <div className="col-md-7">
           <h2 style={{fontSize:'40px'}}>My Cart</h2>
            {cartItems.map(item => {

                return  <div className="flex-container mb-2 "  style={{backgroundColor:"#212121",
                color:"white" , borderRadius:"30px",opacity: '.98' , padding: '20px'}}>
               
                <div className="text-left m-1 w-100">
                    <h2  style={{color: '#0D6EF7' }}>{item.name} [{item.varient}]</h2>
                    <h1>Price: {item.quantity} X {item.prices[0][item.varient]} </h1> 
                    <h1 style={{color:"#FFFF00"}}> Rs. {item.price} /=</h1>
                    <h1 style={{display: 'inline'}}>Days: </h1>
                    <button class="btn btn-secondary btn-sm"
                    onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient,item.date))}}>
                   <strong style={{fontSize: "16px"}}>+</strong>
                    </button>
                    &nbsp;
                    <b style={{fontSize: "16px" , backgroundColor:"#AB69CC" ,padding: "9px",borderRadius:"5px"}}>{item.quantity}</b>
                    &nbsp;
                    
                    <button class="btn btn-secondary btn-sm"
                    onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient,item.date))}}>
                    <strong style={{fontSize: "16px"}}>-</strong>
                    </button>
                    <br/>
                    <b>{item.date}</b>


                   

                    {/* <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i> */}
                    

                </div>
                
                <div className="m-1 w-100">
             
<img src={item.image} className="" style={{height:"200px", width:"200px" ,borderRadius:"15px 50px"}}/>
       
                </div>
               
                <div className="m-1 w-100">
                    <button  type="button" class="btn btn-danger btn-rounded"
                 
          onClick={()=>{dispatch(deleteFromCart(item))}}> Remove
                </button>
    
                </div>
            </div>
                })}
           

        </div>

        <div className="col-md-3 mt-5" >
         

             <div className="mt-2" style={{backgroundColor:"#212121",
                color:"white" , borderRadius:"30px",opacity: '.98' , padding: '20px'}}>
                <h2 style={{fontSize:'45px'}}>Sub Total</h2>
                <h2  style={{color:"#FFFF00"}}> Rs {subtotal} /=</h2>
                <Checkout subtotal={subtotal}/>
                </div>
        </div>
    </div>
  )
}
