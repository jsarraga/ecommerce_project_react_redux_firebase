import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from './actions/cartActions';


const Home = (props) => {
    const header = {
        textAlign: 'center',
        fontSize: '30px',
    }
    const productContainer = {
        display: 'flex',
        justifyContent: 'center'
    }
    const productCard = {
        margin: '10px',
        textAlign: 'center'
    }
   
    const handleClick = (id) => {
        props.addToCart(id);
    }

    let itemList = props.items.map(item=>(
        <div style={productCard} className="card" key={item.id}>
                <div className="card-image">
                    <img style={{height: '350px'}} src={item.img} alt={item.title}/>
                    <span className="card-title">{item.title}</span>
                    <p><b>${item.price.toFixed(2)}</b></p>
                </div>
            
                <div style={{minHeight: '150px'}} className="card-content">
                    <p>{item.desc}</p>
                </div>
                <p><button style={{marginBottom: '10px'}}to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClick(item.id)}}><i className="material-icons"> add</i></button></p>
         </div>
    ))

    return(
        <div className='container'>
            <h3 style={header} >boys</h3>
            <div style={productContainer}>
                {itemList}
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return{
        items: state.cartReducer.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);