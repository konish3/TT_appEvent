import React, { useEffect, useState } from "react";
import './cart.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { ProductInCart } from "./ProductInCart/ProductInCart";
import { removeProduct } from '../../../store/reducers/productToCartSlice';
import { ResultProducts } from "./resultProducts/ResultProducts";

type PlusOrMinus = 'plus' | 'minus';

export const Cart: React.FC = () => {
  const cards = useAppSelector(state => state.productToCart.cards)
  const dispatch = useAppDispatch()
  const [resultPrice, setResultPrice] = useState(0)

  useEffect( () => {
    setResultPrice(cards.reduce((acc, item) => {
      acc += item.price
      return acc
    }, 0))
  }, [cards.length])
  
  

  const plusOrMinusResultPrice = (price: number, variant: PlusOrMinus) => {
    variant === 'plus' ? setResultPrice(resultPrice + price) : setResultPrice(resultPrice - price)
    
  }
  
  const removeProductFromCart = (id: number) => {
    dispatch(removeProduct(id))
  }

  return <div className="cart">
    <div className="_container">
      <div className="cart__title">Корзина</div>
        <div className="cart__content">
          <div className="cart__products">
            <div className="cart__items">
            {cards.map(item => <ProductInCart key={item.id} card={item} plusOrMinusResultPrice={plusOrMinusResultPrice} removeProduct = {removeProductFromCart} />)}
            </div>
          </div>
          <ResultProducts numberProducts={cards.length} resultPrice={resultPrice}/>
        </div>
      </div>
    </div>
}
