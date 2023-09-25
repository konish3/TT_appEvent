import React from "react";
import './cardInCart.scss';
import { ICard } from "../../../../models/ICard";



export const CardInCart: React.FC<ICard> = ({id, image, name, price}) => {
  return <div className="cardInCart">
    <div className="cardInCart__content">
      <div className="cardInCart__delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
          <path d="M14 1.51071L12.59 0L7 5.98929L1.41 0L0 1.51071L5.59 7.5L0 13.4893L1.41 15L7 9.01071L12.59 15L14 13.4893L8.41 7.5L14 1.51071Z" fill="black"/>
        </svg>
      </div>
      <div className="cardInCart__image">
        <img src={image} alt="" />
      </div>
      <h3 className="cardInCart__title">{name}</h3>
      <div className="cardInCart__counter">
        <div className="cardInCart__counter_minus">-</div>
        <div className="cardInCart__counter_number">1</div>
        <div className="cardInCart__counter_plus">+</div>
      </div>
      <div className="cardInCart__price">{price} ₽</div>
    </div>
  </div>
}