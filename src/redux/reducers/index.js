import {GET_COINS} from '../actions/index'

const initialState = {
    coins: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        
    case GET_COINS:
        return {
            ...state,
            coins: action.payload
        }




    default:
        return state
            
    }
}



export default rootReducer;