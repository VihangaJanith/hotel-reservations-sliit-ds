export const addToCart = (pack,quantity,varient,date) => (dispatch, getState) => {



    var cartItem = {
        name: pack.name,
        _id: pack._id,
        image: pack.image,
        varient: varient,
        quantity: Number(quantity),
        date:date,
        prices : pack.prices,
        price: pack.prices[0][varient] * quantity,
     

    }
    
    console.log(cartItem)

    if(cartItem.quantity >10) {
        alert("Sorry, You can only pay for 10 days at a time");
       
    } 
    else{
        if(cartItem.quantity <1){
            dispatch({type: 'DELETE_FROM_CART', payload: pack})
        }
       
        else{
    dispatch({type: 'ADD_TO_CART', payload: cartItem})
        }
    }



    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    

}

export const deleteFromCart = (pack) => (dispatch, getState) => {
    dispatch({type: 'DELETE_FROM_CART', payload: pack})

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems)) 
}