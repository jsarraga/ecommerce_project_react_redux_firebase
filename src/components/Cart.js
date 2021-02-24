import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Total from './Total';
import CheckoutForm from './CheckoutForm';
import Checkout from './Checkout';


const Cart = (props) => {
    console.log("props.items",props.items)
    //removing item
    const handleRemove = (id) =>{
        console.log("in Cart.js, hit function handleRemove", props.items)
        props.removeItem(id);
    }

    //increase quantity
    const handleAddQuantity = (id) =>{
        props.addQuantity(id)
    }

    //decrease quantity
    const handleSubtractQuantity = (id) =>{
        props.subtractQuantity(id)
    }

    let addedItems = props.items.length ?
        (
            props.items.map(item =>{
                return(

                    <li className="collection-item avatar" key = {item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img} className=""/>
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p>Price: {item.price}</p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <Link to="/cart"><i className="material-icons" onClick={()=>{handleAddQuantity(item.id)}}>arrow_up</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={()=>{handleSubtractQuantity(item.id)}}>arrow_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{handleRemove(item.id)}}>Remove</button>
                        </div>
                    </li>

                )
            })
        ):

        (
            <p>Cart is Empty</p>
        )
    return(
        <div className="container">
            <div className="cart">
                <h5>Your order:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>
            <Total />
            <Checkout/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items: state.cartReducer.addedItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)