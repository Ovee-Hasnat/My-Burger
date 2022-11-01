import React from "react";
import Header from './header/header.js'
import BurgerBuilder from "./burgerbuilder/burgerbuilder";
import Orders from "./orders/orders.js";
import Checkout from "./orders/checkout/checkout.js";
import { Route, Routes } from "react-router-dom";

const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/" exact element={<BurgerBuilder />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main;