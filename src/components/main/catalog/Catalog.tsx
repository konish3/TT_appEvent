import React from 'react';
import './catalog.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { Card } from './card.tsx/Card';

export const Catalog: React.FC = () => {
  const cards = useAppSelector((state) => state.cardReducer.cards)
  return <section className="catalog">
    <div className="_container">
      <div className="catalog__content">
        <div className="catalog__title">Каталог</div>
        <ul className="catalog__items">
          {cards.map(item => <Card key={item.id} {...item} />)}
        </ul>
      </div>
    </div>
  </section>
}