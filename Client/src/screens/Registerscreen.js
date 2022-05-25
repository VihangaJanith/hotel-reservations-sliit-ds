import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {registerUser} from '../actions/userActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [phone, setphone] = useState("");

    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error,loading,success} = registerstate


  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };


    function register(){
      
          
      if(!validateEmail(email)){
        alert("Your Email is not valid");
    }
    else{
        if(phone==""){
            alert("Please enter phone number")
            
        }
        else
        if(name==""){
            alert("Please enter your name")
            
        }


          else
        if(password.length<6){
            alert("Password must be atleast 6 characters")
        }
        
        else
          if(password!=cpassword){
            alert("password and confirm password do not match")
        }

        
        else
        if(cpassword.length<6){
            alert("Confirm password must be atleast 6 characters")
        }



      
        else{
            const user = {
                name,
                email,
                password,
                phone
            }
            console.log(user)
            dispatch(registerUser(user))
           
        }
      }
    }


  return (
    <div className="p-2" style={{marginTop: '5%'}}>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 text-left  p-3 mb-5" style={{backgroundColor:"#212121",
                color:"white" , borderRadius:"30px",opacity: '.98' , padding: '20px'}}>
          <h2 className="text-center m-2 " style={{ fontSize: "35px" }}>
       
            Register
          </h2>
          {loading && (<Loading/>)}
          

          {success? (<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Registered Successfully, Please Click Login Now</strong> 
  
</div>) : ''}

{error? (<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong> Email already use</strong> 
  
</div>) : ''}


          
          
          <div >
            <input 
            type="text" 
            className="form-control"
             placeholder="Name"
             required
             value={name}
                onChange={(e)=>{setname(e.target.value)}}
                style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px" , border: "white solid 1px !important"}}
              />
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
              placeholder="Phone"
              required
                value={phone}
                onChange={(e)=>{setphone(e.target.value)}}
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
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Password"
              required
                value={cpassword}
                onChange={(e)=>{setcpassword(e.target.value)}}
                style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px" , border: "white solid 1px !important"}}
            />
            
            <button type="submit" className="btn btn-danger mt-2 mb-2" 
            onClick={register}>
              Register
            </button>
            <br/>
            <a href="/login"  style={{color:"white", textDecoration: "none"}} className="mt-2 ml-2"> Clik here to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
