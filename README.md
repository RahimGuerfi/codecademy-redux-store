# Codecademy Redux Store Project

## Table of contents

- [Project Goals](#project-goals)
- [Built with](#built-with)
- [How to use](#how-to-use)
- [Challenges and Credits](#challenges-and-credits)

## Project Goals

In this project, you’ll build a program that mimics [Codecademy’s own online store!](https://shop.codecademy.com/)

The application should display products from the Codecademy store and allow the user to add them to their cart.

In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom.

Lastly, the user can choose the currency for the entire application.

> ![Demo]()

This application has three slices of state:

- `inventory`: An array of objects representing the items that are available to purchase.
- `cart`: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
- `currencyFilter`: A string that represents the currency used to calculate the prices displayed to the user: `'USD'`, `'CAD'` or `'EUR'`.

An example of this application’s state might look like this:

```
state = {
  inventory: [
    { name: 'Hat', img: 'img/hat.png', price: 15.99 },
    { name: 'T-Shirt', img: 'img/t-shirt.png', price: 18.99 },
    { name: 'Hoodie', img: 'img/hoodie.png', price: 49.99 },
  ],
  cart: {
    'Hat': { price: 15.99, quantity: 0 },
    'T-Shirt': { price: 15.99, quantity: 2 },
    'Hoodie': { price: 18.99, quantity: 1 },
  },
  currencyFilter: 'CAD'
}
```

## Built with

- React
- Dependencies: [redux](https://redux.js.org/)
- Git, GitHub

## How to use

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Challenges and Credits

This was a practice project from the full stack program at Codeacademy.
