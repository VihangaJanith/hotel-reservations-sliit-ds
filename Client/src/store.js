import {combineReducers} from 'redux';

import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'


import { getAllPackagesReducer , addPackageReducer, getPackageByIdReducer, editPackageReducer} from './reducers/packageReducer';

import { cartReducer } from './reducers/cartReducer';

import { registerUserReducer,  loginUserReducer, getAllUsersReducer } from './reducers/userReducer';

import { placeOrderReducer , getUserOrdersReducer ,getAllOrdersReducer, getOrderByIdReducer} from './reducers/orderReducer';

import { bookTaxiReducer  , getOrderedTaxireducer , getAllTaxiReducer} from './reducers/taxiReducer';




const finalReducer = combineReducers({
    
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
  
   getAllOrdersReducer: getAllOrdersReducer,
      getAllUsersReducer: getAllUsersReducer,
      getOrderByIdReducer: getOrderByIdReducer,
      bookTaxiReducer: bookTaxiReducer,
      getOrderedTaxireducer: getOrderedTaxireducer,


      getAllPackagesReducer: getAllPackagesReducer,
      addPackageReducer: addPackageReducer,
      getPackageByIdReducer: getPackageByIdReducer,
      editPackageReducer: editPackageReducer,

      getAllTaxiReducer: getAllTaxiReducer
      

})

const cartItems= localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null

const initialState = {
   cartReducer: {
    cartItems: cartItems
   },
   loginUserReducer: {
    currentUser: currentUser
   }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;