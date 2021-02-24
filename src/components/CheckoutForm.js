import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'



let CheckoutForm = (props) => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} className="form">

        <div className="field">
            <div className="control">
                <label className="label">Country</label>
                <Field name="country" component="input" type="text"/>
            </div>
        </div>

        <div className="field">
            <div className="control">
                <label className="label">First Name</label>
                <Field name="firstName" component="input" type="text"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
                <label className="label">Last Name</label>
                <Field name="lastName" component="input" type="text"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
                <label className="label">Address line 1</label>
                <Field name="address1" component="input" type="text"/>
            </div>
        </div>

        <div className="field">
            <div className="control">
                <label className="label">Address line 2</label>
                <Field name="address2" component="input" type="text"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
                <label className="label">City</label>
                <Field name="city" component="input" type="text"/>
            </div>
        </div>

        <div className="field">
            <div className="control">
                <label className="label">State</label>
                <Field name="state" component="input" type="text"/>
            </div>
        </div>

        <div className="field">
            <div className="control">
                <label className="label">Postal Code</label>
                <Field name="postalCode" component="input" type="number"/>
            </div>
        </div>

        <div className="field">
            <div className="control">
                <label className="label">Phone Number</label>
                <Field name="phone" component="input" type="number"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
                <button className="button is-link">Submit</button>
            </div>
        </div>
  
    </form>;
  };


CheckoutForm = reduxForm({
    form: 'checkout',
})(CheckoutForm);

// checking state if form fields saved
// const selector = formValueSelector('checkout')

// CheckoutForm = connect(state => {
//         const countryValue = selector(state, 'country')
//         const cityValue = selector(state, "city")
//         const first = selector(state, 'firstName')
//         return{
//             countryValue,
//             cityValue,
//             first
//         }
//     }
// )(CheckoutForm)






export default CheckoutForm;