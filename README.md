# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Descripción:
Este proyecto es una aplicación web desarrollada en React que muestra una lista de productos y permite a los usuarios filtrar y agregar productos al carrito de compras.
Dependencias:
@testing-library/jest-dom: ^5.17.0
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
node-sass: ^9.0.0
nodemon: ^3.0.1
react: ^18.2.0
react-dom: ^18.2.0
react-icons: ^4.11.0
react-router-dom: ^6.20.0
react-scripts: ^5.0.1
web-vitals: ^2.1.4
Scripts:
start: react-scripts start
build: react-scripts build
test: react-scripts test
eject: react-scripts eject
build-css: node-sass --include-path scss src/styles/main.scss src/styles/main.css
watch-css: nodemon -e scss -x "npm run build-css"
Estructura del Proyecto:
El archivo principal del proyecto es App.jsx, que contiene la lógica principal de la aplicación, incluyendo la gestión de productos, filtros, carrito de compras y enrutamiento.
Componentes Principales:
Header
Cart
HomeProducts
Footer
Contexto:
El proyecto utiliza un contexto de carrito de compras para gestionar el estado global de los productos seleccionados.