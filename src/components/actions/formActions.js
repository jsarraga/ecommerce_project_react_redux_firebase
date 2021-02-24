import { ADD_ORDER } from './action-types/form-actions'

export const addOrder = (order) => {
    return{
        type: ADD_ORDER,
        order }
}
