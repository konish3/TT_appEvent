import React from 'react';
import './catalog.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Card } from './card.tsx/Card';
import { ICard } from '../../../models/ICard';
import { addProduct } from '../../../store/reducers/productToCart';

export const Catalog: React.FC = () => {
  const cards = useAppSelector((state) => state.cardReducer.cards)
  const dispatch = useAppDispatch()

  const addProductToCart= ({id, image, name, price}: ICard) => {
    dispatch(addProduct({id, image, name, price}))
  }

  return <section className="catalog">
    <div className="_container">
      <div className="catalog__content">
        <div className="catalog__title">Каталог</div>
        <div className="catalog__items">
          {cards.map(item => <Card key={item.id} {...item} addProductToCart={addProductToCart}/>)}
        </div>
      </div>
    </div>
  </section>
}