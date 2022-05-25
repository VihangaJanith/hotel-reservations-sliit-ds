export const getAllPackagesReducer = (state = {packages : []}, action) => {

    switch (action.type) {
        case 'GET_PACKAGES_REQUEST': return {
            loading: true,
                ...state
            }
        case 'GET_PACKAGES_SUCCESS': return {
            loading: false,
                packages: action.payload
            }
        case 'GET_PACKAGES_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }
}


export const addPackageReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_PACKAGE_REQUEST': return {
            loadings: true,
                ...state
            }
        case 'ADD_PACKAGE_SUCCESS': return {
            loadings: false,
               success: true
            }
        case 'ADD_PACKAGE_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }
}


export const getPackageByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_PACKAGEBYID_REQUEST': return {
            loadings: true,
                ...state
            }
        case 'GET_PACKAGEBYID_SUCCESS': return {
            loadings: false,
                packag: action.payload
            }
        case 'GET_PACKAGEBYID_FAILED':return {
            
                error: action.payload,
                loadings: false
            }
        default: return state;
    }
}

export const editPackageReducer = (state = {}, action) => {

    switch (action.type) {
        case 'EDIT_PACKAGE_REQUEST': return {
            editloadings: true,
                ...state
            }
        case 'EDIT_PACKAGE_SUCCESS': return {
            editloadings: false,
            editsuccess: true
            }
        case 'EDIT_PACKAGE_FAILED':return {
            
            editerror: action.payload,
            editloadings: false
            }
        default: return state;
    }
}