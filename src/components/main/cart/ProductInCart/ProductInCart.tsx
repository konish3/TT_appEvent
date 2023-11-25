import React, { useState } from "react";
import './productInCart.scss';
import { ICard } from "../../../../models/ICard";

type Props = {
  card: ICard,
  removeProduct: Function,
  plusOrMinusResultPrice: Function,
}

export const ProductInCart: React.FC<Props> = ({card, removeProduct, plusOrMinusResultPrice}) => {

  const [countProduct, setCountProduct] = useState(1)

  return <div className="cardInCart">
    <div className="cardInCart__content">
      <button onClick={() => removeProduct(card.id)} className="cardInCart__delete">
        <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
          <path d="M14 1.51071L12.59 0L7 5.98929L1.41 0L0 1.51071L5.59 7.5L0 13.4893L1.41 15L7 9.01071L12.59 15L14 13.4893L8.41 7.5L14 1.51071Z" fill="black"/>
        </svg>
      </button>
      <div className="cardInCart__image">
        <img src={card.image} alt="" />
      </div>
      <h3 className="cardInCart__title">{card.name}</h3>
      <div className="cardInCart__counter">
        <button 
          className="cardInCart__counter_minus"
          {...(countProduct === 1 ? {disabled:true} : null)}
          onClick={() => {setCountProduct(countProduct - 1); plusOrMinusResultPrice(card.price, 'minus')}} >-
        </button>
        <div className="cardInCart__counter_number">{countProduct}</div>
        <button 
          className="cardInCart__counter_plus"
          onClick={() => {setCountProduct(countProduct + 1); plusOrMinusResultPrice(card.price, 'plus')}} >+</button>
      </div>
      <div className="cardInCart__price">{card.price} ₽</div>
    </div>
  </div>
}