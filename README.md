# 🛒 Shopping Cart

A simple e-commerce shopping cart built with **React**, **Redux Toolkit**, and **React Router** to demonstrate state management using Redux Toolkit.

This project focuses on learning Redux concepts such as slices, async thunks, centralized state management, and updating application state efficiently.

---

## 🚀 Features

- Fetch products from Fake Store API
- Display product catalog
- Add products to cart
- Update product quantity
- Temporary quantity editing before applying changes
- Update all modified cart items at once
- Remove individual products from cart
- Remove all products from cart
- Automatic total price calculation
- Client-side routing using React Router

---

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- Fake Store API

---

## Project live link
https://shopping-cart-redux-mauve.vercel.app/

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   └── Cart.jsx
│
├── features/
│   └── Shopcart/
│       ├── cartSlice.js
│       └── productSlice.js
│
├── app/
│   └── store.js
│
├── App.jsx
└── main.jsx
```

---


## 📡 API Used

Fake Store API

https://fakestoreapi.com/products

---

## ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd redux-shopping-cart
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 🎯 Purpose

This project was created to practice Redux Toolkit concepts including:

- Global state management
- Async data fetching
- Slice architecture
- Redux actions and reducers
- Managing application state without prop drilling

