import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post(
      "http://localhost:8290/apis/placeorder",
      { token, subtotal, currentUser, cartItems }
    );

    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
    localStorage.removeItem('cartItems')
   




  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};






export const getUserOrders = () => async (dispatch, getState) => {

  const currentUser = getState().loginUserReducer.currentUser;

  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:8290/apis/getuserorders",
      { userid: currentUser._id }
    );

    console.log(response);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;

  dispatch({ type: "GET_ALLORDERS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:8290/apis/getallorder"
    );

    console.log(response);
    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALLORDERS_FAILED", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8290/apis/deliverorder",
      { orderid }
    );

    console.log(response);


    const orders = await axios.get(
      "http://localhost:8290/apis/getallorder"
    )

    dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: orders.data });

  } catch (error) {
    
  }
};

export const getOrderById = (orderid) => async (dispatch) => {
  dispatch({ type: "GET_ORDERBYID_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:8290/apis/getorderbyid",
      { orderid }
    );
    console.log(response);
    dispatch({ type: "GET_ORDERBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ORDERBYID_FAILED", payload: error });
  }
};

export const deleteOrder = (orderid) => async (dispatch) => {
  try {
    if(window.confirm('Do you want to cancel your reservation ?')){
    const response = await axios.post(
      "http://localhost:8290/apis/deleteorder",
      { orderid }
    );
    alert("Reservation Cancelled Successfully");
    console.log(response);
    window.location.reload();
    }

  } catch (error) {
    alert("order Deletion Failed");
    console.log(error);
  }
};
