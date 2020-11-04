import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="/">
                <div className="">Greenbox</div>
            </a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/order">
                        Order Now!
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Items
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="/">
                        Orders
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
