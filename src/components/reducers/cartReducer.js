import Item1 from '../../images/tnook-placeholder-clothing.jpg';
import Item2 from '../../images/track_suit.jpg'
import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY, ADD_SHIPPING, SUB_SHIPPING} from '../actions/action-types/cart-actions';

const initState = {
    items:  [
        {id:1, title:'Zip Romper, Woodland Animals', desc: 'Your 1970s gym class is calling! Retro velour short with our signature Avocado Print pairs with anything, really!',
        price: 32, img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2}
    ],
    addedItems: [],
    total: 0

}

const cartReducer = (state = initState, action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        let existed_item = state.addedItems.find(item=> action.id ===item.id)
        if(existed_item)
        {
            addedItem.quantity += 1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    if(action.type === SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id != action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }
    if(action.type === ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 8.99
        }
    }
    if(action.type === SUB_SHIPPING){
        return{
            ...state,
            total: state.total - 8.99
        }
    }
    

    return state

}

export default cartReducer;