import React from 'react'
import { connect } from 'react-redux'

import { deleteItemFromCart } from '../../../redux/shop/shopActions'

function CartItem({item, deleteItemFromCart}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-10">
                        <h5 className="card-title">
                            {item.name} 
                        </h5>
                        <p className="card-text">${item.price}</p>
                    </div>
                    <div className="col-sm-2">
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

{/* <div className="card mt-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-10">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">${item.price}</p>
                    </div>
                    <div className="col-sm-2">
                        <button 
                            type="button"
                            onClick={() => addItemToCart(item)}
                            className="btn btn-success">
                            Add
                        </button>
                    </div>

                </div>
            </div>
        </div> */}

const mapDispatchToProps = {
    deleteItemFromCart,
}

export default connect(null, mapDispatchToProps)(CartItem)
