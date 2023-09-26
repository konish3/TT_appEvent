import React from "react";
import './resultProducts.scss';

type Props = {
    numberProducts: number
    resultPrice: number
}

export const ResultProducts: React.FC<Props> = ({numberProducts, resultPrice}) => {
    return <div className="cart__sum">
    <div className="cart__sum_content">
        <div className="cart__number">
            {numberProducts} товаров
        </div>
        <ul className="cart__progress">
            <li className="cart__progress_delivery">
                <p>Доставка</p>
            </li>
            <li className="cart__progress_payment">
                <p>Оплата</p>
            </li>
            <li className="cart__progress_contacts">
                <p>Контакты</p> 
            </li>
        </ul>
        <div className="cart__result-sum">
            <h4>Итого:</h4>
            <p>{resultPrice} ₽</p>
        </div>
        <div className="cart__buy-button">
            <button>Оформить заказ</button>
        </div>
    </div>
  </div>
}