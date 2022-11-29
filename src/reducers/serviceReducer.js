import axios from "axios"


export const getServices = () => {
    return async (dispatch) => {

        dispatch({ type: 'GET_SERVICES' })
        const response = await axios.get('http://localhost:5000/api/services')
        if (response) {
            dispatch({ type: 'GET_SERVICES_COMPLETED', payload: response.data.data })
        }
        if (!response) {
            dispatch({ type: 'GET_SERVICES_FAILED' })
        }
    }
}



const serviceReducer = (state = { isLoading: false, servicesData: [] }, action) => {

    if (action.type === 'GET_SERVICES') {
        return {
            isLoading: true,
        }
    }

    if (action.type === 'GET_SERVICES_COMPLETED') {
        return {
            isLoading: false,
            servicesData: action.payload
        }
    }
    if (action.type === 'GET_SERVICES_FAILED') {
        return {
            isLoading: false,
            servicesData: []
        }
    }

    return state
}

export default serviceReducer