import React ,{ useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getOrderById} from '../actions/orderAction';
import {getUserOrders} from '../actions/orderAction'
import {bookTaxi} from '../actions/taxiActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {Link} from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";

export default function Taxy({match}) {

  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");

    const userState = useSelector(state => state.loginUserReducer);
    const {currentUser} = userState

    const getorderbyidstate = useSelector((state) => state.getOrderByIdReducer);
  const { order, success, loading } = getorderbyidstate;

  const dispatch = useDispatch();


  useEffect(() => {

    if(order){

        if(order._id==match.params.orderid){

        setname(order.name);
        setaddress(order.shippingAddress.street + ", " + order.shippingAddress.city + ", " + order.shippingAddress.country);
        setemail(order.email)


      setdate(order.orderItems[order.orderItems.length-1].date)

        }
        else{
          dispatch(getOrderById(match.params.orderid));
          
        }
    }
    else{
      dispatch(getOrderById(match.params.orderid));

    }

  }, [order , dispatch]);


  function formHandler(e){
    e.preventDefault()
  
    const taxi ={
      id: match.params.orderid,
      userid: currentUser._id,
      name: order.name,
     address,
     email: order.email,
     date,
     phone: currentUser.phone,
    }
    console.log(taxi)
  
    dispatch(bookTaxi(taxi));
  
  }

  const images = [
    {url: 'https://res.cloudinary.com/vihanga/image/upload/v1651903372/ds/781967_zdilas.jpg'},
  {url: "https://res.cloudinary.com/vihanga/image/upload/v1651903199/ds/781965_cn1wlh.jpg"},
  { url: "https://res.cloudinary.com/vihanga/image/upload/v1651903373/ds/781969_tnv9wh.jpg"},
  { url: "https://res.cloudinary.com/vihanga/image/upload/v1651903373/ds/781970_aak0jg.jpg"},
  { url: "https://res.cloudinary.com/vihanga/image/upload/v1651903373/ds/781971_qxqfqr.jpg"},
];


  return (
    <div>



      
      

    <div className="mt-5 text-center" style={{textAlign: 'center'}}>

    <nav class="navbar sticky-top navbar-collapse justify-content-center text-left navbar-light bg-light mt-5 p-3 ">
  <a class="navbar-brand" href="" style={{marginLeft: '90px',}}>
    
    
  <img src="https://res.cloudinary.com/vihanga/image/upload/v1652975926/download_qdxizh.png"  width="70" height="70"/>
   <strong>Taxi Service</strong> 
  </a>
</nav>




  <div className="container">

    <div className="w3-container">

      <SimpleImageSlider style={{}}
        width={1125}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />

</div>
      

</div>


     <div >           
  
 
       
       {success && (<h1>Deliver success</h1>)}

     

      
<div class="form-outline ml-5 p-3">

  <div class="form-group ml-5 p-3"  style={{backgroundColor:"#212121",
        color:"white" , borderRadius:"30px",opacity: '.98', width:"600px" }}>
        <form onSubmit={formHandler} className="container text-left" style={{width:'400px'}} >
        <div class="w3-container">
    <h2>Book Taxi </h2>

</div>



<label  style={{marginBottom: '-10px'}}>Address</label>

<input
               id="form12" class="form-control"
                type="text"
                value={address}
                placeholder="address"
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
            
            <label className="mt-2 " style={{marginBottom: '-10px'}}>Date</label>
<input

                className="form-control"
                type="text"
                value={date}
                placeholder="address"
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
<button type="submit" className="btn btn-warning" style={{marginTop: '20px'}} >
  Book Taxi
</button>


              </form>
              </div>
              </div>
              </div>
    </div>
    </div>
  )
}
