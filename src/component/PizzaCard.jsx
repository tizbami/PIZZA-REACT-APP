import React from "react";
import { pizzaData } from "../data";

const pizzaCard = () => {
  return (
    <>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <li
            key={index}
            className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
          >
            <img src={pizza.photoName} alt={pizza.name} className="pizza" />

            <div className="pizza">
              <h3 className="pizza">{pizza.name}</h3>
              <p className="pizza">{pizza.ingredients}</p>
              {!pizza.soldOut && <p className="pizza">{pizza.price}</p>}
              {pizza.soldOut && <p className="sold-out">Sold Out</p>}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default pizzaCard;
