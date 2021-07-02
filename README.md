# [React Card Shopping](https://gandrescoello18.github.io/example-react-card-shopping/)

Componente de react para mostrar productos de comercio en tarjetas

## Getting started

instalar react card shopping via npm:

```
npm i react-card-shopping --save
```

O yarn:

```
yarn add react-card-shopping
```

El paquete exporta por defecto el componente de card.

```javascript
import CardShopping from 'react-card-shopping';
import 'react-card-shopping/src/card.css';
```

Example:

```jsx
  <CardShopping
    alert
    title='Titulo del producto',
    price={13}
    source="https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    discount={9}
    avalible={150}
    addToCart={() => console.log('agregado al carrito')}
  />
```

You can find more examples here: [LIVE DEMO](https://gandrescoello18.github.io/example-react-card-shopping/)

## Configuration

Supports the following props for configuring the widget:

| Prop name                   | Type                                                    | Default value  | Description                                                                            |
| --------------------------- | ------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| title                       | string                                                  | `'Lorem Ipsum'` | Es el titulo del producto, por defecto sera `'Lorem ipsum para ejemplos '`                                               |
| source                      | string                                                  | fetch photo pexel | Obtiene imagen del producto del repositorio de pexel       |
| price                       | number                                                  | `'0'`          | El precio por defecto sera 0 pero es recomendable que sea un numero mayor               |
| discount                    | number                                                  | `'0'`          | El componente solo reacciona cuando el descuento es mayor a 0 y retorna el nuevo precio |
| avalible                    | number                                                  | `'0'`          | Es el numero de productos que tienes disponibles.                 |
| addToCart                   | function                                                | false          | Funcion que se ejecuta cuando dan click en el boton de AÑADIR AL CARRITO.              |
| favorite                    | function                                                | false          | Funcion que se ejecuta cuando dan click en producto favorito.                         |
| isFav                       | boolean                                                 | false          | Muestra si el producto es favorito o no.        |
| alert                       | boolean                                                 | false          | Muestra una alerta dinamica mostrando al usuario el producto agregado al carrito.            |
| tag                         | string                                                  | `''`           | Muestra una etiqueta en la parte superior de la tarjeta.            |
| color                       | object                                                  | undefined      | Recibe 2 propiedades `'background'` y `'text'` donde modificaran los colores de la tarjeta.
| className                   | string                                                  | `'product display-flex flex-direction'`      | Clases que usa la tarjeta.            |
