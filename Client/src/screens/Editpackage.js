import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackageById , editPackage} from "../actions/packageActions";


import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Editpizza({ match }) {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState("");
  const [mediumprice, setmediumprice] = useState("");
  const [largeprice, setlargeprice] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getpackagebyidstate = useSelector((state) => state.getPackageByIdReducer);
  const { packag, error, loading } = getpackagebyidstate;

  const editpackagestate = useSelector((state) => state.editPackageReducer);
    const { editsuccess, editerror, editloading } = editpackagestate;
  

  const dispatch = useDispatch();

  useEffect(() => {

    if(packag){

        if(packag._id==match.params.packageid){

        setname(packag.name);
        setsmallprice(packag.prices[0]["TwoPerson"])
        setmediumprice(packag.prices[0]["FourPerson"])
        setlargeprice(packag.prices[0]["Family"])
        setimage(packag.image);
        setdescription(packag.description);
        setcategory(packag.category);
        }
        else{
            dispatch(getPackageById(match.params.packageid));
        }
    }
    else{
    dispatch(getPackageById(match.params.packageid));
    }

  }, [packag , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedpackage = {
    _id: match.params.packageid,
      name,
      image,
      description,
      category,
      prices: {
        TwoPerson: smallprice,
        FourPerson: mediumprice,
        Family: largeprice,
      },
    };
   
    dispatch(editPackage(editedpackage))
  }
  return (
    <div>
   

      <div className="justify-content-center" style={{ textAlign: "center" }}>
        <div>
          <hr/>
          <h2>Edit Packages</h2>
          {editsuccess && (<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Hotel Package Updated Success</strong> 

</div>)}

          <div>
            <form
              onSubmit={formHandler}
              className='col-md-7 p-3 m-3 text-left'
              style={{ display: "inline-block" }}
            >
              
              <input
                className="form-control"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              
              <input
                type="text"
                className="form-control"
                value={smallprice}
                placeholder="Small Varient Price"
                onChange={(e) => {
                  setsmallprice(e.target.value);
                }}
              />

              <input
                type="text"
                className="form-control"
                value={mediumprice}
                placeholder="Medium Varient Price"
                onChange={(e) => {
                  setmediumprice(e.target.value);
                }}
              />

              <input
                type="text"
                className="form-control"
                value={largeprice}
                placeholder="Large Varient Price"
                onChange={(e) => {
                  setlargeprice(e.target.value);
                }}
              />

              <input
                type="text"
                className="form-control"
                value={image}
                placeholder="Image"
                onChange={(e) => {
                  setimage(e.target.value);
                }}
              />

              <input
                type="text"
                className="form-control"
                value={description}
                placeholder="Description"
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />

              <input
                type="text"
                className="form-control"
                value={category}
                placeholder="Category"
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              />

              <br />

              <button type="submit" className="btn btn-primary">
            Edit Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
