import axios from "axios"


export const getCourses = () => {
    return async (dispatch) => {
        dispatch({ type: 'GET_COURSES' })
        let response = await axios.get('http://localhost:5000/api/services')

        if (response) {
            dispatch({ type: 'GET_COURESES_COMPLETED', payload: response.data.data })
        }
        if (!response) {
            dispatch({ type: 'GET_SERVICES_FAILED' })
        }
    }
}






const courseReducer = (state = { isLoading: false, courseData: [] }, action) => {

    if (action.type === 'GET_COURSES') {
        return {
            isLoading: true,
        }
    }

    if (action.type === 'GET_COURESES_COMPLETED') {
        return {
            isLoading: false,
            courseData: action.payload
        }
    }
    if (action.type === 'GET_SERVICES_FAILED') {
        return {
            isLoading: false,
            courseData: []
        }
    }

    return state
}

export default courseReducer