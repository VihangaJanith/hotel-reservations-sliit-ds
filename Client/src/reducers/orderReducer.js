export const placeOrderReducer = (state={}, action) => {

    switch(action.type){
        case 'PLACE_ORDER_REQUEST': return {
            loading: true
        }
        case 'PLACE_ORDER_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'PLACE_ORDER_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }


}


export const getUserOrdersReducer = (state = {orders : []}, action) => {

    switch (action.type) {
        case 'GET_USER_ORDERS_REQUEST': return {
            loadings: true,
                ...state
            }
        case 'GET_USER_ORDERS_SUCCESS': return {
            loadings: false,
                orders: action.payload
            }
        case 'GET_USER_ORDERS_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }
}

export const getAllOrdersReducer = (state = {orders : []}, action) => {

    switch (action.type) {
        case 'GET_ALLORDERS_REQUEST': return {
            loadings: true,
                ...state
            }
        case 'GET_ALLORDERS_SUCCESS': return {
            loadings: false,
                orders: action.payload
            }
        case 'GET_ALLORDERS_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }
}

export const getOrderByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_ORDERBYID_REQUEST': return {
            loadings: true,
                ...state
            }
        case 'GET_ORDERBYID_SUCCESS': return {
            loadings: false,
                order: action.payload
            }
        case 'GET_ORDERBYID_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }
}