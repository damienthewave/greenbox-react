import React from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import ShopPage from "./components/shop/ShopPage"
import HomePage from "./components/HomePage"
import Footer from "./components/Footer"
import OrderShippingPage from "./components/shop/order/OrderShippingPage"
import OrderListPage from "./components/orders/OrderListPage"
import OrderPage from "./components/orders/OrderPage"
import ItemListPage from "./components/items/ItemListPage"
import {
  ITEMS,
  ITEMS_CREATE,
  ORDERS,
  SHIPPING,
  SHOP,
  SUMMARY,
} from "./constants/routes"
import NotFoundPage from "./components/NotFoundPage"
import ItemCreatePage from "./components/items/ItemCreatePage"
import SummaryPage from "./components/summary/SummaryPage"

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
          <Route path={SUMMARY} exact component={SummaryPage} />
          <Route path={ORDERS + "/:id"} component={OrderPage} />
          <Route path={ITEMS} exact component={ItemListPage} />
          <Route path={ITEMS_CREATE} exact component={ItemCreatePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </div>
  )
}

export default App
