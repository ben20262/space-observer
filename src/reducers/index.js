export default function indexReducer(state = {all: [], loading: false}, action) {

    switch(action.type) {
        case 'LOADING_VISIBLE':
            return {
                all: [...state.all],
                loading: true
            }
        case 'ADD_VISIBLES':
            return {
                all: action.objects,
                loading: false
            }
        default:
            return state
    }
}