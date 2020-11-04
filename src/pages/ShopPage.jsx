import React from 'react'
import ShopItemList from '../components/shop/ShopItemList'
import Cart from '../components/shop/Cart'

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
