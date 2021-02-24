import { ADD_ORDER } from '../actions/action-types/form-actions';

const initState = {
    orders: []
}

const formReducer = (state = initState, action)=>{
    if(action.type === ADD_ORDER){
        return{
            ...state,
            order: state.order + [action.order]
        }
    }
    return state

}

export default formReducer;