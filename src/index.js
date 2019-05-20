import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/app/App.jsx";
import * as serviceWorker from "./serviceWorker";
import "./sass/index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
