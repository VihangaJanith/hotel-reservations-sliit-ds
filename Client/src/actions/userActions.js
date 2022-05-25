import axios from 'axios';



export const registerUser = (user) => async dispatch => {
   
    dispatch({type: 'USER_REGISTER_REQUEST'})


    try{

        
    const response = await axios.post(
      // 'http://localhost:5000/api/users/register'
      // 'http://localhost:5003/api/users/register'
      'http://localhost:8290/users/userRegister'
    , user)
     console.log(response)
      dispatch({type: 'USER_REGISTER_SUCCESS'})
        

    }catch(error){
        dispatch({type: 'USER_REGISTER_FAILURE', payload: error})

    }
    
}

export const loginUser = (user) => async dispatch => {
   
    dispatch({type: 'USER_LOGIN_REQUEST'})

    try{
    const response = await axios.post(
      // 'http://localhost:5000/api/users/login'
      // 'http://localhost:5003/api/users/login'
      'http://localhost:8290/users/userLogin'
    , user)
     console.log(response)
      dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data})
      
    localStorage.setItem('currentUser', JSON.stringify(response.data))
    window.location.href = '/'
    }catch(error){
        dispatch({type: 'USER_LOGIN_FAILURE', payload: error})

    }
}

export const logoutUser = () =>dispatch => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')

    window.location.href="/login"
    
}

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "GET_USERS_REQUEST" });
  
    try {
      const response = await axios.get(
        // 'http://localhost:5000/api/users/getallusers'
        // 'http://localhost:5003/api/users/getallusers'
        'http://localhost:8290/users/getUsers'

      );
      console.log(response);
      dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_USERS_FAILED", payload: error });
    }
  };
    
  export const deleteUser = (userid) => async (dispatch) => {
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/users/deleteuser",
        // "http://localhost:5003/api/users/deleteuser",
        "http://localhost:8290/users/deleteUser",


        { userid }
      );
      alert("User Deleted Successfully");
      console.log(response);
      window.location.reload();
    } catch (error) {
      alert("User Deletion Failed");
      console.log(error);
    }
  };

  export const makeHotelAdmin = (userid) => async (dispatch) => {
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/users/makehoteladmin",
        // "http://localhost:5003/api/users/makehoteladmin",
        "http://localhost:8290/users/makeHotelAdmin",

        { userid }
      );
  
      console.log(response);
      alert("Hotel Admin ");
  
      const users = await axios.get(
        // "http://localhost:5000/api/users/getAllUsers"
        // "http://localhost:5003/api/users/getAllUsers"
        'http://localhost:8290/users/getUsers'


      )
  
      dispatch({ type: "GET_USERS_SUCCESS", payload: users.data });
  
    } catch (error) {
      
    }
  };

  export const removeHotelAdmin = (userid) => async (dispatch) => {
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/users/removehoteladmin",
        // "http://localhost:5003/api/users/removehoteladmin",
        "http://localhost:8290/users/removeHotelAdmin",

        { userid }
      );
  
      console.log(response);
      alert("Hotel Admin removed ");
  
      const users = await axios.get(
        // "http://localhost:5000/api/users/getAllUsers"
        // "http://localhost:5003/api/users/getAllUsers"
        'http://localhost:8290/users/getUsers'

      )
  
      dispatch({ type: "GET_USERS_SUCCESS", payload: users.data });
  
    } catch (error) {
      
    }
  };

  