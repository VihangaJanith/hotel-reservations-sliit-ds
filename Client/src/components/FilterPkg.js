import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterPackages} from '../actions/packageActions'

export default function FilterPkg() {
    const dispatch = useDispatch();
    const [searchkey, setsearchkey] = useState("");
    const [category, setcategory] = useState('all');

  return (
    <div className="sidebar mt-5 "  >
    <div className="container mt-5" >
        <div className="row justify-content-center p-3 mb-5 "   style={{backgroundColor:"#212121",
        color:"white" , borderRadius:"0px 0px 30px 30px",opacity: '.98' }}  >

            <div className="col-md-3" >
                <input type="text" className="form-control" value={searchkey} onChange={(e) => {setsearchkey(e.target.value)}}
                 placeholder="Search Packages"   style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px",  border: "black solid 1px"}} />

            </div>

            <div className="col-md-3 mt-2">
                <select className="form-control" value={category} onChange={(e) => {setcategory(e.target.value)}}
                  style={{ backgroundColor: "#212121", color: "white", borderRadius: "10px",  border: "black solid 1px"}}>
                    <option value='all'>All Packages</option>
                    <option value='luxury'>Luxury Packages</option>
                    <option value='normal'>Normal Packages</option>
                </select>
                
            </div>

            <div className="col-md-1">
                <button 
onClick={()=>dispatch(filterPackages(searchkey,category))}  type="button" class="btn btn-secondary btn-rounded">Filter</button>
                
            </div>

        </div>

    </div>
    </div>
  )
}
