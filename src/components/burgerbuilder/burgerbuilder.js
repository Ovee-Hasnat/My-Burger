import React, { Component } from "react";
import Burger from "./burger/burger";
import Controls from "./Control/control"

class BurgerBuilder extends Component {
    state = {
        ingredient: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 },
        ]
    }
    render() {
        return (
            <div className="d-flex flex-md-row flex-column" >
                <Burger ingredients={this.state.ingredient} />
                <Controls />
            </div>
        )
    }
}

export default BurgerBuilder;