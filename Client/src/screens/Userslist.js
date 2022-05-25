import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, deleteUser, makeHotelAdmin, removeHotelAdmin } from '../actions/userActions';

export default function Userslist() {

  const dispatch = useDispatch();
  const getuserssstate = useSelector((state) => state.getAllUsersReducer);
  const { users, error, loading } = getuserssstate;
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="container-fluid" style={{backgroundColor: '#FFFF'}}>
      <h2>Users List</h2>
       <table className="table table-striped">
        <thead className="thead table-dark">
          <tr>
          <th></th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th>email</th>
            <th>System Admins</th>
            <th>Hotel Admins</th>
            {currentUser.isAdmin ? (
              <th>All Users</th>
            ) : (<th></th>)}
            {currentUser.isAdmin ? (
              <th>User Actions</th>
            ) : (<th></th>)}

        {currentUser.isAdmin ? (
              <th>Create Hotel Admins</th>
            ) : (<th></th>)}

           



          
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user,index) => {
              return (
                <tr>
                  <td>{index+1})</td>
                  <td style={{ textAlign: "center" }}>{user.name} {user.isAdmin===true? 
                 ( <h4 style={{ color:"green"}}> (System Admin)</h4> ):("")
                 
            }</td>
                  <td>{user.email}
                  </td>
                  <td>

                    
                    {/* {user.isAdmin ? "Yes" : "No"} */}
                  {user.isAdmin===true? 
                 ( <h4 style={{ color:"green"}}> System Admin</h4> ):("Not Admin")
                 
            }

                  </td>
                  <td>
            {user.isHotelAdmin===true? 
                  ( <h4 style={{ color:"green"}}>Hotel Admin</h4> ):("Not Hotel Admin")
            }
            </td>

            <td>
            {user.isHotelAdmin===true? 
                  ( "Staff" ):("User")
            }
            </td>

                  <td>
                  {currentUser.isAdmin? (

                    <button type="button" className="btn btn-danger"
                    onClick={()=>{dispatch(deleteUser(user._id))}} >
                      <i className="fa fa-trash" style={{ color: "white" }}></i>
                      Block User
                    </button>


                  ):(null)}
                  </td>
                 
                 
                 
                 
                  <td>
                    {currentUser.isAdmin? (
                  

                    user.isHotelAdmin ? (
                      <button className="btn btn-secondary"
                      onClick={()=> {dispatch(removeHotelAdmin(user._id))}}
                      > Remove Hotel Admin </button>
                    ) : (
                      <button className="btn btn-success"
                     
                      onClick={()=> {dispatch(makeHotelAdmin(user._id))}}
                      > Make Hotel Admin </button>
                    )
                    
                    ):(null)}

                  </td>
                    
                 
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  )
}
