import React from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import ShopPage from "./components/shop/ShopPage"
import HomePage from "./components/HomePage"
import Footer from "./components/Footer"
import OrderShippingPage from "./components/shop/order/OrderShippingPage"
import OrderListPage from "./components/orders/OrderListPage"
import OrderPage from "./components/orders/OrderPage"
import ItemPage from "./components/items/ItemPage"
import ItemListPage from "./components/items/ItemListPage"
import { ITEMS, ORDERS, SHIPPING, SHOP } from "./constants/routes"
import NotFoundPage from "./components/NotFoundPage"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path={SHOP} exact component={ShopPage} />
          <Route path={SHIPPING} exact component={OrderShippingPage} />
          <Route path={ORDERS} exact component={OrderListPage} />
          <Route path={ORDERS + "/:id"} component={OrderPage} />
          <Route path={ITEMS} exact component={ItemListPage} />
          <Route path={ITEMS + "/:id"} exact component={ItemPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </div>
  )
}

export default App
