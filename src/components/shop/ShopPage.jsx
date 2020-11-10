import React from 'react'
import ShopItemList from './shop/ShopList'
import Cart from './cart/Cart'

function ShopPage() {
    return (
        <div>
            <h1>Shop</h1>
            <div className="row">
                <div className="col mr-auto">
                    <ShopItemList />
                </div>
                <div className="col mr-auto">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default ShopPage
