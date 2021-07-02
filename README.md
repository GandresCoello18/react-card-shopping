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
| value                       | string                                                  | `''`           | The value containing markup for mentions                                               |
| onChange                    | function (event, newValue, newPlainTextValue, mentions) | empty function | A callback that is invoked when the user changes the value in the mentions input       |
| singleLine                  | boolean                                                 | `false`        | Renders a single line text input instead of a textarea, if set to `true`               |
| onBlur                      | function (event, clickedSuggestion)                     | empty function | Passes `true` as second argument if the blur was caused by a mousedown on a suggestion |
| allowSpaceInQuery           | boolean                                                 | false          | Keep suggestions open even if the user separates keywords with spaces.                 |
| suggestionsPortalHost       | DOM Element                                             | undefined      | Render suggestions into the DOM in the supplied host element.                          |
| inputRef                    | React ref                                               | undefined      | Accepts a React ref to forward to the underlying input element                         |
| allowSuggestionsAboveCursor | boolean                                                 | false          | Renders the SuggestionList above the cursor if there is not enough space below         |
| a11ySuggestionsListLabel    | string                                                  | `''`           | This label would be exposed to screen readers when suggestion popup appears            |
