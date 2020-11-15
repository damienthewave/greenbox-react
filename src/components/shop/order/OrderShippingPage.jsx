import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CartList from '../cart/CartList'

function OrderShippingPage({ cartItems }) {
    
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [comment, setComment] = useState("");

    if(cartItems.length === 0){
        return <Redirect to="/order"/>
    }

    const renderForm = () => {
        return (
            <form className="mt-3">
                <div className="form-group">
                    <label htmlFor="inputName">Full Name</label>
                    <input
                        className="form-control input-lg"
                        id="inputName"
                        placeholder="Name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputName">Phone Number</label>
                    <input
                        className="form-control input-lg"
                        placeholder="Phone number"
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Full Address</label>
                    <input
                        className="form-control input-lg"
                        placeholder="Address"
                        id="inputAddress"
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputComment">Comment</label>
                    <input
                        className="form-control input-lg"
                        placeholder="Optional Comment"
                        id="inputComment"
                        onChange={(event) => setComment(event.target.value)}/>
                </div>
            </form>
        )
    }

    function canSubmit(){
        return name && address && phoneNumber
    }

    function submit(){
        
    }

    const renderProceedButton = () => {
        let btnClass = "btn btn-" + (canSubmit() ? "success" : "secondary") 
        return (
            <button 
                type="button"
                onClick={() => canSubmit() ? null : null}
                className={btnClass}>
                Submit
            </button>
        )
    }

    return (
        <div>
            <h1>Shipping Details</h1>
            <div className="row">
                <div className="col">
                    {
                        renderForm()
                    }
                </div>
                <div className="col">
                    <CartList cartItems={cartItems} delButton={false}/>
                </div>
            </div>
            {
                renderProceedButton()
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.shopItems.cartItems,
    }
}

export default connect(mapStateToProps)(OrderShippingPage)
