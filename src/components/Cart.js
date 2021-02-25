import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Total from './Total';
import CheckoutForm from './CheckoutForm';


const Cart = (props) => {
    const [checkingOut, setCheckingOut] = useState(false)

    const header = {
        textAlign: 'center',
        fontSize: '30px',
    }
    
    const cartItem = {
        padding: '10px',
    }

    //removing item
    const handleRemove = (id) =>{
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

                    <li style={cartItem} className="collection-item avatar" key = {item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img} className=""/>
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                   
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <Link to="/cart"><i className="material-icons" onClick={()=>{handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={()=>{handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
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
            <div style={{marginBottom: '10px'}}className="cart">
                <h5 style={header}>Cart</h5>
                <ul style={{border: '1px solid lightgrey'}}className="collection">
                    {addedItems}
                </ul>
            </div>
            <Total />
            <button onClick={(e) =>setCheckingOut(true)}>Checkout</button>
            {checkingOut ? <CheckoutForm/> : null}
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


