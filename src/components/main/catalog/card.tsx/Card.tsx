import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';
import { ICard } from '../../../../models/ICard';


export const Card: React.FC<ICard> = ({id, image, name, price}) => {
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
            <button>В корзину</button>
          </div>
        </div>
      </article>
  </div>
}