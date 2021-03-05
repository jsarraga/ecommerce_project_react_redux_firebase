import React from 'react'
import { connect } from 'react-redux';

let photo ={
    height: '200px',
    width: '200px'
};

const cartItem = {
    padding: '30px',
    paddingTop: '50px',
    textAlign: 'right'
}

let popupStyles = {
    width: '600px',
    maxWidth: '75%',
    height: '500px',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 10px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let popupCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

const Confirmation = (props) => {

    let addedItems = props.items.map(item =>{
                return(

                    <div className="collection-item avatar" key = {item.id}>
                        <div className="item-img" style={photo} >
                            <img src={item.img} alt={item.img} className={photo} style ={cartItem}/>
                            <p>
                                <span className="title">{item.title}</span>
                            </p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                        </div>
                    </div>

                )
            })

    let popup = (
        <div style={popupStyles}>
            <button style={popupCloseButtonStyles} onClick={props.onClose}>x</button>
            <div>
            {props.children}
            {addedItems}
            </div>
        </div>
    )

    if(! props.isOpen) {
        popup = null;
    }
    return (
        <div>
            {popup}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items: state.cartReducer.addedItems
    }
}

export default connect(mapStateToProps)(Confirmation);