import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/slices/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>

        <App />
        <Toaster/>
 
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
