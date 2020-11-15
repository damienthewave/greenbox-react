import React from 'react'
import { connect } from 'react-redux'

import { deleteItemFromCart } from '../../../redux/shop/shopActions'
import CartItem from './CartItem'

import { calculateTotal } from '../../../utils/itemUtils'

function Cart({cartItems}) {

    const renderCartInfo = () => {
        return cartItems && cartItems.length!==0? (
            <div>
                <div>Total price: ${calculateTotal(cartItems)}</div>
                <button className="btn btn-primary">Proceed</button>
            </div>
        ):(
            <p>You have no items in the cart. Add some!</p>
        )
    }

    return (
        <div>
            <h3>Cart</h3>
            <ul className="list-group">
                {
                    cartItems.map(
                        cartItem => {
                            return <CartItem key={cartItem.item.id} 
                                            item={cartItem.item}
                                            amount={cartItem.amount} />
                        }
                    )
                }
                </ul>
            <div className="mt-3">
                {
                    renderCartInfo()
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      cartItems: state.shopItems.cartItems,
    };
};

const mapDispatchToProps = {
    deleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
