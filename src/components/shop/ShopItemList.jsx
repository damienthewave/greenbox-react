import React, { useEffect} from 'react'
import { connect } from "react-redux";
import ShopListItem from './ShopListItem'

import { fetchItems } from "../../redux/shop/shopActions";

function ShopItemList({itemData, fetchItems}) {

    useEffect(() => {
        fetchItems()
    }, [])


    console.log(itemData)
    
    return (
        <div>
            <h1>Items</h1>
            {
                itemData.loading? (
                    <p>Loading...</p>
                ) : itemData.error? (
                    <p>{itemData.error}</p>
                ) : itemData.shopItems.length ? (
                    <ul className="list-group">
                        {
                            itemData.shopItems.map((item) =>
                                <ShopListItem key={item.id} item={item}/>
                            )
                        }
                    </ul>
                ) : (
                    <p>No items</p>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      itemData: state.shopItems,
    };
};

const mapDispatchToProps = {
    fetchItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemList)
