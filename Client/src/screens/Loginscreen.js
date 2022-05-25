import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../actions/userActions'
import Error from "./Error";
import Loading from "./Loading";  
import TextField from "@material-ui/core/TextField";

export default function Loginscreen() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector(state=>state.loginUserReducer)
  const {error,loading} = loginstate


  const dispatch = useDispatch();

  useEffect(() => {

    if(localStorage.getItem("currentUser"))
    {
      window.location.href = "/homepkg"
    }

  })

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function login(){

    if(email==""){
      alert("Please enter Your Email")
    }

  else{
    if(!validateEmail(email)){
      alert("Please Enter a valid Email")
  }

    else
    if(password==""){
      alert("Please enter Your Password")
    }

  else{

    
        const user = {email,password }
        console.log(user)
        dispatch(loginUser(user))
       
  }}
}

  return (
    <div className="p-2" style={{marginTop: '5%'}}>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 text-left  p-3 mb-5"  style={{backgroundColor:"#212121",
                color:"white" , borderRadius:"30px",opacity: '.98' , padding: '20px'}}>
          <h2 className="text-center m-2 " style={{ fontSize: "35px" }}>
            Login
          </h2>

         
          
         
          {error &&( <Error/>)}
        
          
          <div >
           
            <input type="text" 
            className="form-control" 
            placeholder="Email"
            required
            value={email}
                onChange={(e)=>{setemail(e.target.value)}}
                style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px" , border: "white solid 1px !important"}}
             />
         
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              required
              value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                  style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px" , border: "white solid 1px !important"}}

            />
            
            <button type="submit" className="btn btn-danger mt-2 mb-2 " 
            onClick={login} style={{marginLeft:"-1px"}}>
              Login
            </button>
            <br/>
            <a href="/register" 
            style={{color:"white", textDecoration: "none"}} className="mt-2"> Clik here to Register</a>
          </div>
        </div>
      </div>
    </div>
  )
}
