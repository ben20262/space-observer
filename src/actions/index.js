const apiURL = 'https://space-observer-api.herokuapp.com/'

export const fetchVisible = () => {
    return dispatch => {
        dispatch({type: 'LOADING_VISIBLE'})
        fetch(apiURL)
        .then(resp => resp.json())
        .then(objects => dispatch({type: 'ADD_VISIBLES', objects}))
    }
}