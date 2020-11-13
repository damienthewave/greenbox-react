import React from 'react'
import { connect } from 'react-redux'

import { deleteItemFromCart } from '../../../redux/shop/shopActions'
import { calculateSubtotal, itemToUnit } from '../../../utils/itemUtils'

function CartItem({item, amount, deleteItemFromCart}) {

    let price = calculateSubtotal(item, amount)

    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-10">
                        <h5 className="card-title">
                            {item.name} 
                        </h5>
                        <div className="card-text">
                            <div>{amount} {itemToUnit(item)}</div>
                            <div>${price}</div>
                        </div>
                    </div>
                    <div className="col square">
                        <div
                            className="list-item delete-button btn btn-danger"
                            onClick={() => deleteItemFromCart(item)}>
                            <p className="align-middle">&#x2715;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteItemFromCart,
}

export default connect(null, mapDispatchToProps)(CartItem)
