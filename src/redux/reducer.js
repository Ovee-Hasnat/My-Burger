import * as actionTypes from './actionTypes';

const INGREDIENTS_PRICE = {
    salad: 20,
    cheese: 40,
    meat: 90,
}

const INITIAL_STATE = {
    ingredient: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 },
    ],
    totalPrice: 80,
    purchasable: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
    const ingredient = [...state.ingredient]
    switch (action.type) {

        case actionTypes.ADD_INGREDIENT:
            for (let item of ingredient) {
                if (item.type === action.payload) item.amount++;
            }
            return {
                ...state,
                ingredient: ingredient,
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.payload]
            }

        case actionTypes.REMOVE_INGREDIENT:
            for (let item of ingredient) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return;
                    item.amount--;
                }
            }
            return {
                ...state,
                ingredient: ingredient,
                totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.payload]
            }

        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredient.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)
            return {
                ...state,
                purchasable: sum > 0,
            }

        default:
            return state;
    }
}