import React from "react";
import "./ingredient.css"
import top from '../../../assets/images/top.png';
import bottom from '../../../assets/images/bottom.png';
import cheese from '../../../assets/images/cheese.png';
import salad from '../../../assets/images/salad.png';
import meat from '../../../assets/images/meat.png';


const Ingredient = props => {
    let ingredient = null;
    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div> <img src={bottom} alt="Bread Bottom" /> </div>
            break;
        case 'bread-top':
            ingredient = <div> <img src={top} alt="Bread Top" /> </div>
            break;
        case 'cheese':
            ingredient = <div> <img src={cheese} alt="Cheese" /> </div>
            break;
        case 'salad':
            ingredient = <div> <img src={salad} alt="Salad" /> </div>
            break;
        case 'meat':
            ingredient = <div> <img src={meat} alt="Meat" /> </div>
            break;
        default:
            ingredient = null;
    }
    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient;