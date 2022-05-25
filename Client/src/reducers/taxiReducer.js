export const bookTaxiReducer = (state = {}, action) => {

    switch (action.type) {
        case 'BOOK_TAXI_REQUEST': return {
            loadings: true,
                ...state
            }
        case 'BOOK_TAXI_SUCCESS': return {
            loadings: false,
               success: true
            }
        case 'BOOK_TAXI_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }

}

export const getOrderedTaxireducer = (state = {taxis : []}, action) => {

    switch (action.type) {
        case 'GET_TAXI_ORDERS_REQUEST': return {
            loadings: true,
                ...state
            }
        case 'GET_TAXI_ORDERS_SUCCESS': return {
            loadings: false,
                taxis: action.payload
            }
        case 'GET_TAXI_ORDERS_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }
}

export const getAllTaxiReducer = (state = {taxis : []}, action) => {

    switch (action.type) {
        case 'GET_ALLTAXI_REQUEST': return {
            loading: true,
                ...state
            }
        case 'GET_ALLTAXI_SUCCESS': return {
            loadings: false,
                taxis: action.payload
            }
        case 'GET_ALLTAXI_FAILED':return {
            
                error: action.payload,
                loading: false
            }
        default: return state;
    }
}
