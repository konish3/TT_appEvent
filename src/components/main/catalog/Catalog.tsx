import React from 'react';
import './catalog.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { Card } from './card.tsx/Card';

export const Catalog: React.FC = () => {
  const cards = useAppSelector((state) => state.cardReducer.cards)
  return <div className="catalog">
    <div className="_container">
      <div className="catalog__content">
        <div className="catalog__title">Каталог</div>
        <div className="catalog__items">
          {cards.map(item => <Card key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} />)}
        </div>
      </div>
    </div>
  </div>
}