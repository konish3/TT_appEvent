import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

export const Header: React.FC = () => {

  const countProductInCart = useAppSelector(state => state.productToCart.cards.length)

  return (
    <header className='header'>
      <div className="header__container _container">
        <div className="header__content">
          <div className="header__left-side">
            <ul className="header__list">
              <li className='header__list_item'>
                <Link to='/'>Каталог</Link>
              </li>
              <li className='header__list_item'>
                <Link to='#'>Акции</Link>
              </li>
            </ul>
          </div>
          <div className="header__logo">
            <div className='header__logo_name'>at<svg width={60} height={60} viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="none" transform="rotate(0)">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#ff0000" strokeWidth="0.144"></g>
                <g id="SVGRepo_iconCarrier"><path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44" d="M18.893 7.936a8.003 8.003 0 0 1-7.774 12.016m-6.012-3.888a8.003 8.003 0 0 1 7.774-12.016"></path>
                  <circle cx="17.657" cy="6.343" r="2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44" transform="rotate(45 17.657 6.343)"></circle>
                  <circle cx="6.343" cy="17.657" r="2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44" transform="rotate(45 6.343 17.657)"></circle>
                  <circle cx="12" cy="12" r="2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44" transform="rotate(45 12 12)"></circle>
                </g>
            </svg>m</div>
          </div>
          <div className="header__right-side">
            <Link to='/cart'>
            <svg width={35} height={35} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g data-name="1" id="_1">
                  <path d="M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"/>
                  <path d="M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"/>
                  <path d="M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"/>
                  <path d="M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"/>
                </g>
            </svg>
            </Link>
            <span>{countProductInCart}</span>
          </div>
        </div>
      </div>
    </header>
  )
  
}
