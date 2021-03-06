import React, { useState }from 'react';
import { addOrder} from './actions/formActions';
import { connect } from 'react-redux';
import Confirmation from './Confirmation';


const CheckoutForm = (props) => {
    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space around',
        flexWrap: 'wrap',
        width: '250px'
    }
    const header = {
        paddingTop: '50px',
        fontSize: '30px',
    }

    const [country, setCountry] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [postal, setPostal] = useState('')
    const [phone, setPhone] = useState('')
    const [isOpen, setIsOpen] = useState(false)


    function handleSubmit() {

        let order = {
            "country": country,
            "first" : first, 
            "last" : last, 
            "address1" : address1,
            "address2" : address2,
            "city" : city,
            "state" : state,
            "postal" : postal,
            "phone" : phone,
            "items" : props.items
        }
        console.log("order - in checkoutForm onsubmit", order)
        props.addOrder(order)
        setIsOpen(true)
    }
     
    return (
        <div>
            <h2 style={header}>Checkout</h2>
            <div style={formStyles}>
                <label className="label">Country</label>
                <input onChange={(e)=>setCountry(e.target.value)} name="country" component="input" type="text"/>
                <label className="label">First Name</label>
                <input onChange={(e)=>setFirst(e.target.value)} name="firstName" component="input" type="text"/>
                <label className="label">Last Name</label>
                <input onChange={(e)=>setLast(e.target.value)} name="lastName" component="input" type="text"/>
                <label className="label">Address line 1</label>
                <input onChange={(e)=>setAddress1(e.target.value)} name="address1" component="input" type="text"/>
                <label className="label">Address line 2</label>
                <input onChange={(e)=>setAddress2(e.target.value)} name="address2" component="input" type="text"/>
                <label className="label">City</label>
                <input onChange={(e)=>setCity(e.target.value)} name="city" component="input" type="text"/>
                <label className="label">State</label>
                <input onChange={(e)=>setState(e.target.value)} name="state" component="input" type="text"/>
                <label className="label">Postal Code</label>
                <input onChange={(e)=>setPostal(e.target.value)} name="postalCode" component="input" type="number"/>
                <label className="label">Phone Number</label>
                <input onChange={(e)=>setPhone(e.target.value)} name="phone" component="input" type="number"/>
                <p><button style={{marginTop: '10px'}} onClick={(e) => handleSubmit()} className="button is-link">Submit</button></p>
            </div>
            <div>
                <Confirmation isOpen={isOpen} onClose={(e) => setIsOpen(false)} >
                    <h3>Thank you!</h3>
                    <i>your order is being proccessed</i>
                </Confirmation>
            </div>
        </div>
    )
    };


const mapStateToProps = (state) => {
    return{
        items: state.cartReducer.addedItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addOrder: (order)=>{dispatch(addOrder(order))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);


