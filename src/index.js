import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./style.scss"

import { Provider } from "react-redux"
import reducer from "./redux/rootReducer"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
