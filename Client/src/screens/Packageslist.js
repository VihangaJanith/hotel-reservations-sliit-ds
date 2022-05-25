import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getAllPackages , deletePackage} from "../actions/packageActions";

import { Link } from "react-router-dom";

export default function Packageslist() {
  const dispatch = useDispatch();

  const packagestate = useSelector((state) => state.getAllPackagesReducer);
  const { packages, error, loading } = packagestate;

  useEffect(() => {
    dispatch(getAllPackages());
  }, []);

  return (
    <div className="col-md-12" style={{backgroundColor: '#FFFF'}}>
      <h2>Packages List</h2>
      {error && <Error error="something went wrong" />}
      {loading && <Loading />}

      <table className="table table-striped">
        <thead className="thead table-dark">
          <tr>
            <th></th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages &&
            packages.map((pack,index) => {
              return (
                <tr>
                  <td>{index+1})</td>
                  <td style={{ textAlign: "center" }}>{pack.name}</td>
                  <td>
                    Two Person : {pack.prices[0]["TwoPerson"]} <br />
                    Four Person : {pack.prices[0]["FourPerson"]} <br />
                    Family : {pack.prices[0]["Family"]}
                  </td>

                  <td>{pack.category}</td>
                  <td>
                    <Link to={`/admin/editpackage/${pack._id}`} className>
                      <button className="btn btn-warning">
                        <i className="fa fa-edit"></i>
                        &nbsp; Edit
                      </button>
                    </Link>
                   
                    &nbsp; &nbsp;
                    <button className="btn btn-danger"
                    onClick={()=>{dispatch(deletePackage(pack._id))}} >
                      <i className="fa fa-trash" style={{ color: "white" }}></i>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
