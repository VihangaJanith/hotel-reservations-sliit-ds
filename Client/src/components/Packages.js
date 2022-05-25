import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";



export default function Packages({ pack}) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("TwoPerson");
  const [date, setdate] = useState("Date Haven't Selected");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart() {
    {
      dispatch(addToCart(pack, quantity, varient, date));
    }
  }

 const  disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
};

  return (

    <div  className="sss">

  

    
    <div 
    class="shadow mb-3"  
    style={{backgroundColor:"#212121",
        color:"white" , borderRadius:"30px",opacity: '.98'  }}>
    
      
      <div class="row  " >
        <div class="col-sm-3 text-left">
      <div onClick={handleShow}>
        <img
          src={pack.image}
          classname="img-fluid"
          alt={pack.name}
          style={{ height: "300px", width: "225px", borderRadius: "20px 50px 0px 20px", objectFit: "cover", objectPosition: "50%"}}
        />
       

        
      </div>
      </div>

      <div class="col-sm-9">

      <div className="flex-container ">
       
       
        <div className="w-100 m-1 ml-2 mt-2 text-left "> 
        <h9 style={{color: '#0D6EF7' , fontSize:"40px" }}>{pack.name.toUpperCase()}</h9>
          <h1 style={{marginBottom: '7px'}}>Package</h1>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
            style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px" , border: "white solid 1px !important"}}
          >
            {pack.varients.map((varient) => {
              return <option value={varient}> {varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1 pr-2 mt-2 text-left"> <h9 style={{visibility: 'hidden' , fontSize:"40px"}} >{pack.name}</h9>
          <h1 style={{marginBottom: '7px'}}>Days</h1>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);

            }}
            style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px",  border: "black solid 1px"}}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}> {i + 1}</option>;
            })}
          </select>
        </div>
        </div>


       
<div className="w-2 m-1 ml-2 pr-2 text-left">
      <h1> Booking Date</h1>
          <input
            type="date"
            required
            className="form-control"
            name="departureDate"
            placeholder="YY/MM/DD"
            min={disablePastDate()}
            minDate={new Date()}
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
            style={{ backgroundColor: "#212121", color: "white", borderRadius: "20px", border: "black solid 1px"}}
          />
        </div>

       
<div className="flex-container text-left mt-3">
        <div className="m-1 w-100 col-12 col-sm-6 col-md-7 text-left">
          <h2 className="mt-1"style={{color:"orange"}}>
            Price : Rs {pack.prices[0][varient] * quantity}/=
          </h2>
        </div> 
        
        <div className=" w-100 col-6 col-md-5">
          <button  className="btn" onClick={addtocart}
          style={{backgroundColor: "orange", height: "50px" ,width: "200px"}}>

            Add to cart
          </button>
        </div>

      </div>

      
 
      


      



       
      </div>

      </div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header  style={{backgroundColor:"#212121",
        color:"white" , opacity: '.98'  }} closeButton>
          <Modal.Title style={{color: '#0D6EF7' , fontSize:"40px" }}>{pack.name.toUpperCase()}</Modal.Title>
        </Modal.Header>

        <Modal.Body  style={{backgroundColor:"#212121",
        color:"white" , opacity: '.98'  }}>
          <div className="">
            <img
              src={pack.image}
              classname="img-fluid"
              alt={pack.name}
              style={{ height: "380px", width: "450px" , borderRadius: "20px 50px 0px 20px", objectFit: "cover" }}
            />
            
          </div>
          <p style={{fontSize:"20px" }}>{pack.description}</p>
        </Modal.Body>

        <Modal.Footer  style={{backgroundColor:"#212121",
        color:"white" , opacity: '.98'  }}>
          
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}
