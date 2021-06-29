import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { AlertCart } from '.';
import { calculatePrice } from './util/price';

export const ConfirmCart = ({ source, title, discount, price }: AlertCart) => {
    return confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui paddind-10'>
              <h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                &nbsp;
                Agregado al carrito
              </h2>

              <a className="img-prod display-flex">
                <img width="40%" src={source} alt={title} />
                <div className="paddind-10">
                  <h3>{title}</h3>

                  <strong>$
                    {calculatePrice({
                      discount,
                      price,
                    })}
                  </strong>

                  <div className="action-alert">
                    <button onClick={onClose}>Seguir comprando</button>
                  </div>
                </div>
              </a>
            </div>
          );
        }
      });
}