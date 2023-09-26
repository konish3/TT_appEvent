import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';
import { ICard } from '../../../../models/ICard';
import { useAppDispatch } from '../../../../hooks/redux';

import productToCart, { addProduct } from '../../../../store/reducers/productToCartSlice';

type Props = {
  id: number,
  image: string,
  name: string,
  price: number,
  addProductToCart?: Function,
}


export const Card: React.FC<Props> = ({id, image, name, price, addProductToCart}) => {


  return <div className="card">
      <article className="card__content">
        <div className="card__image">
          <img src={image} alt="" />
        </div>
        <div className="card__name">
          <Link to='#'>{name}</Link>
        </div>
        <div className="card__price-and-button">
          <div className="card__price-and-button_price">
            <p>{price} руб.</p>
          </div>
          <div className="card__price-and-button_button">
            <button 
              onClick={() => {
                if(addProductToCart) addProductToCart({id, image, name, price})
              }
              }>В корзину
            </button>
          </div>
        </div>
      </article>
  </div>
}