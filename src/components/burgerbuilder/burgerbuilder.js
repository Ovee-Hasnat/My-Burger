import React, { Component } from "react";
import Burger from "./burger/burger";
import Controls from "./Control/control"

const Ingredients_price = {
    salad: 20,
    cheese: 40,
    meat: 90,
}

class BurgerBuilder extends Component {
    state = {
        ingredient: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 },
        ],
        totalPrice: 80
    }

    addIngredientHandle = type => {
        const ingredient = [...this.state.ingredient]
        const newPrice = this.state.totalPrice + Ingredients_price[type];
        for (let item of ingredient) {
            if (item.type === type) item.amount++;
        }
        this.setState({ ingredient: ingredient, totalPrice: newPrice });
    }

    removeIngredientHandle = type => {
        const ingredient = [...this.state.ingredient]
        const newPrice = this.state.totalPrice - Ingredients_price[type];
        for (let item of ingredient) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }
        }
        this.setState({ ingredient: ingredient, totalPrice: newPrice });
    }


    render() {
        return (
            <div className="d-flex flex-md-row flex-column" >
                <Burger ingredients={this.state.ingredient} />
                <Controls
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemoved={this.removeIngredientHandle}
                    price={this.state.totalPrice}
                />
            </div>
        )
    }
}

export default BurgerBuilder;