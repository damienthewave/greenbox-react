import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../../../redux/shop/shopActions'

function ShopListItem({item, addItemToCart}) {
    return (
        <div className="card mt-3">
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
        </div>
    )
}

const mapDispatchToProps = {
    addItemToCart,
}

export default connect(null, mapDispatchToProps)(ShopListItem)
