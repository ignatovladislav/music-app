import * as types from "../actionTypes";

const initilalState = {
  songs: {},
  loading: true,
  error: false
};


export default (state = initilalState, action) => {
    switch (action.type) {
        case types.ADD_SONGS: 
        // console.log(action.items)
        return {
            ...state,
            songs: action.payload
        }
        

        case types.ITEMS_LOADING: {
        return {
            ...state,
            loading: action.payload
        };
        }
        
        case types.ITEMS_ERROR: {
        return {
            ...state,
            error: action.payload
        };
        }

        default:
        return state;
    }
}