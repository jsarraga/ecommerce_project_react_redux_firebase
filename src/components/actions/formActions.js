import { ordersRef } from '../../firebase/firebase';

export const addOrder = newOrder => async dispatch => {
    ordersRef.push().set(newOrder);
  };