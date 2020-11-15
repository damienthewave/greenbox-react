import React from 'react'
import ShopItemList from './items/ShopList'
import Cart from './cart/Cart'

function ShopPage() {
    return (
        <div>
            <h1>Shop</h1>
            <div className="row">
                <div className="col-7">
                    <ShopItemList />
                </div>
                <div className="col-5">
                    <Cart />
                </div>
            </div>
            <br/>
        </div>
    )
}

export default ShopPage
