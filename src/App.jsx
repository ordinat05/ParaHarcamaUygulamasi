import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import products from "./helpers/products.json"
import Product from './components/Product.jsx'
import Basket from './components/Basket.jsx'
import './App.css'

function App() {


  const [money, setMoney] = useState(10000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {

    // const productAmountTotal = basket.reduce((acc, item) => {
    //   return acc + (item.amount * (products.find(product => product.id === item.id).price))
    // }, 0)
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
    // console.log(basket)
  }, [basket])

  const resetBasket = () => {
    setBasket([])
  }

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      {/* <h1>React ile Para Harcama</h1> */}
      <Header moneyProp={money} totalProp={total} />
      <div className="products">
        {
          products.map(product => (
            <Product key={product.id} productProp={product} basketProp={basket} setBasketProp={setBasket} totalProp={total} moneyProp={money} />
          ))
        }  </div>
      <Basket totalProp={total} resetBasketProp={resetBasket} basketProp={basket} productsProp={products} />
    </div>
  )
}

export default App
