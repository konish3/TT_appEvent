import React from 'react';
import './card.scss';

type Props = {
  id: number,
  image: string,
  name: string,
  price: number,
}

export const Card: React.FC<Props> = ({id, image, name, price}) => {
  return <div className="card">
    <div className="card__container">
      <div className="card__content">
        <div className="card__image"><img src={image} alt="" /></div>
        <div className="card__name">
          <p>{name}</p>
        </div>
        <div className="card__price-and-button">
          <div className="card__price-and-button_price">
            <p>{price}</p>
          </div>
          <div className="card__price-and-button_button">
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}