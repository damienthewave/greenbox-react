import React from 'react'
import { connect } from 'react-redux'

import { deleteItemFromCart } from '../../../redux/shop/shopActions'
import CartItem from './CartItem'

function Cart({cartItems}) {
    return (
        <div>
            <h3>Cart</h3>
            <ul className="list-group">
                {
                    cartItems.map(
                        item => {
                            return <CartItem key={item.id} item={item} />
                        }
                    )
                }
            </ul>
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
