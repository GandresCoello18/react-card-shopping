import React, { CSSProperties, Fragment } from 'react';
import './card.css';
import { css } from '@emotion/css'
import { calculatePrice } from './util/price';

interface Props {
  title: string
  avalible: number
  price: number
  discount: number
  source: string
  color?: string
  className?: string
  style?: CSSProperties
}

export let defaultBaseColor = "#e6e1e2";

export const CardShoppingStyles = {
  backgroundColor: defaultBaseColor,
  color: '#fff',
};

const CardShopping = ({ title, avalible, price, discount, source, className, color, style }: Props) => {
  
  let classCardDefault = "product display-flex flex-direction";

  if (className) {
    classCardDefault += " " + className;
  }

  if(color){
    defaultBaseColor = color
  }

  return (
    <div style={{ width: 400 }}>
      <div 
        className={classCardDefault}
        style={{ ...style }}
      >
        <a className="img-prod">
          <img
            width="100%"
            src={source}
            alt={title}
          />
          <div className="overlay" />
        </a>
      <div className="text paddind-10">
        <h3>{title}</h3>
        <div className="cat" style={{ width: '100%' }}>
          <span>{avalible} Disponibles</span>
        </div>
        <p className="price">
          <strong>${calculatePrice({
            discount,
            price
          })}</strong>
          {discount ? (
            <Fragment>
              <span className="tachado margin-left-10">US ${price}</span> &nbsp;{' '}
              <span className="tag-discount margin-left-10">-{discount}%</span>
            </Fragment>
          ) : ''}
        </p>
        <div className="bottom-area display-flex">
            <a href='#' className={`buy-now ${
              css`
              &:hover {
                background-color: ${defaultBaseColor} !important;
              }
            `
            }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width='23' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <br />
              <span>Ver</span>
            </a>
            <a className={`buy-now`}>
              <svg xmlns="http://www.w3.org/2000/svg" width='23' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <br />
              <span>Añadir</span>
            </a>
            <a className={`buy-now`}>
              <svg xmlns="http://www.w3.org/2000/svg" width='23' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <br />
              <span>Favorito</span>
            </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardShopping

CardShopping.defaultProps = {
  title: 'So impressed with how comfortable and light these trainers are, decided to experiment with levitation',
  avalible: 0,
  discount: 0,
  price: 0,
  source: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
}