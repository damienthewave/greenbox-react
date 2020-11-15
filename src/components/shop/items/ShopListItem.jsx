import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../../../redux/shop/shopActions'
import { getSubtotal, getStep, itemToUnit } from '../../../utils/itemUtils'


const ShopListItem = ({item, addItemToCart}) => {
    
    const [amount, setAmount] = useState(0)

    function addItem(){
        addItemToCart(item, amount)
    }

    function canAdd(){
        return amount != 0
    }

    const renderAddButton = () => {
        let btnClass = "btn btn-" + (canAdd() ? "success" : "secondary") 
        return (
            <button 
                type="button"
                onClick={() => canAdd() ? addItem(item, amount) : null}
                className={btnClass}>
                Add
            </button>
        )
    }

    const renderItemProperties = () => {
        return (
            <div>
                <div className="row">
                    <input
                        type="number"
                        min={0}
                        max={1000}
                        step={getStep(item)}
                        className="form-control input col-8"
                        onChange={(event) => setAmount(event.target.value)}/>
                    <span className="align-bottom col-4">{itemToUnit(item)}</span>
                </div>
                <div className="row">
                    {
                        amount != 0 ? <p>{getSubtotal(item, amount)}</p> : <p></p>
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-title">{item.name}</h5>
                        <div>
                            <p className="card-text">
                                ${item.price} / {itemToUnit(item)}
                            </p>
                            <span>{item.description}</span>
                        </div>
                    </div>
                    <div className="col-4">
                        {
                            renderItemProperties()
                        }
                    </div>
                    <div className="col-2">
                        {
                            renderAddButton()
                        }
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
