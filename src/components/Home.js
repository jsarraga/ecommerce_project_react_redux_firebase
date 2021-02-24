import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from './actions/cartActions';


const Home = (props) => {

    const handleClick = (id) => {
        props.addToCart(id);
    }


    let itemList = props.items.map(item=>(
        <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.title}/>
                    <span className="card-title">{item.title}</span>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClick(item.id)}}><i className="material-icons"> add</i></span>
                </div>

                <div className="card-content">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
         </div>
    ))


    return(
        <div className='container'>
            <h3>Children's clothing</h3>
            <div>
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