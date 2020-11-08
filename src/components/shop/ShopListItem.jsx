import React from 'react'

function ShopListItem({item}) {
    return (
        <div className="card mt-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-10">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">${item.price}</p>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-success">
                            Add
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShopListItem
