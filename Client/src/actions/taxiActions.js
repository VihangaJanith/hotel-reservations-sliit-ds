import axios from 'axios';



export const bookTaxi = (taxi) => async dispatch => {
   
    dispatch({type: 'BOOK_TAXI_REQUEST'})


    try{

        
    const response = await axios.post(
      // 'http://localhost:5000/api/taxi/book',
      // 'http://localhost:5002/api/taxi/book',
      "http://localhost:8290/taxiroute/booktaxi",
       taxi)
     console.log(response)
      dispatch({type: 'BOOK_TAXI_SUCCESS'})
      alert('Taxi Booked Successfully')
      window.location.href = '/taxiord'
        

    }catch(error){
        dispatch({type: 'BOOK_TAXI_FAILURE', payload: error})

    }
    
}

export const getOrderedTaxi = () => async (dispatch, getState) => {

    const currentUser = getState().loginUserReducer.currentUser;
  
    dispatch({ type: "GET_TAXI_ORDERS_REQUEST" });
  
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/taxi/getorderedtaxi",
        // "http://localhost:5002/api/taxi/getorderedtaxi",
        "http://localhost:8290/taxiroute/orderedtaxi",
        { userid: currentUser._id }
      );
  
      console.log(response);
      dispatch({ type: "GET_TAXI_ORDERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_TAXI_ORDERS_FAILED", payload: error });
    }
  };

  export const deleteTaxiOrder = (taxiid) => async (dispatch) => {
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/taxi/deletetaxiorder",
        // "http://localhost:5002/api/taxi/deletetaxiorder",
        "http://localhost:8290/taxiroute/taxidelete",
        { taxiid }
      );
      alert("Booking Deleted Successfully");
      console.log(response);
      window.location.reload();

    } catch (error) {
      alert("booking Deletion Failed");
      console.log(error);
    }
  };


  export const getAlltaxi = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
  
    dispatch({ type: "GET_ALLTAXI_REQUEST" });
  
    try {
      const response = await axios.get(
        // "http://localhost:5000/api/taxi/getalltaxi"
        // "http://localhost:5002/api/taxi/getalltaxi"
        "http://localhost:8290/taxiroute/getall"
      );
  
      console.log(response);
      dispatch({ type: "GET_ALLTAXI_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ALLTAXI_FAILED", payload: error });
    }
  };