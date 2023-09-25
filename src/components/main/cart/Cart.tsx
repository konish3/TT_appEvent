import React from "react";
import './cart.scss';
import { useAppSelector } from "../../../hooks/redux";
import { CardInCart } from "./cardInCart/CardInCart";

export const Cart: React.FC = () => {
  
  const cards = useAppSelector(state => state.productToCart.cards)
  console.log(cards)
  

  return <div className="cart">
    <div className="_container">
    <div className="cart__content">
        <div className="cart__title">Корзина</div>
        <div className="cart__items">
          {cards.map(item => <CardInCart key={item.id} {...item}/>)}
        </div>
      </div>
    </div>
  </div>
}