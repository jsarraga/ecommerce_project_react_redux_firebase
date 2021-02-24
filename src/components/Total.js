import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShipping } from './actions/cartActions';

class Total extends Component{

    componentWillUnmount() {
        if(this.refs.shipping.checked)
             this.props.substractShipping()
   }

    handleChecked = (e) =>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.subtractShipping();
        }
    }    

    render() {

    return(
        <div className="container">
            <div className = "collection">
                <li className="collection-item">
                    <label>
                        <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                        <span>Shipping(+$8.99)</span>
                    </label>
                </li>
                <li className="collection-item"><b>Total: ${this.props.total.toFixed(2)} </b></li>
            </div>
            <div className="checkout">
                <button className="waves-effect waves-light btn">Checkout</button>
            </div>
        </div>
    )
}
}
const mapStateToProps = (state) => {
    return{
        addedItems: state.addedItems,
        total: state.cartReducer.total
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return{
        addShipping: () =>{dispatch({type: 'ADD_SHIPPING'})},
        subtractShipping: () =>{dispatch({type: 'SUB_SHIPPING'})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Total)