import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
      <PersistGate persistor={persistor}> 
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
//this persistGate wrapps app for the persist session storage. we pass persistor created in the store.js as a prop there
  //this provider wraps the app for redux state
