import React from "react";
import Header from './header/header.js'
import BurgerBuilder from "./burgerbuilder/burgerbuilder";

const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <BurgerBuilder />
            </div>
        </div>
    )
}

export default Main;