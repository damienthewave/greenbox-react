import React from "react";
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ShopPage from './components/shop/ShopPage'
import HomePage from './components/HomePage'
import Footer from "./components/Footer";
import OrderShippingPage from "./components/shop/order/OrderShippingPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/order" exact component={ShopPage} />
          <Route path="/order/shipping" exact component={OrderShippingPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
