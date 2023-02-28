import React from "react";
import "./Product.css";


function Product({ productProp, basketProp, setBasketProp, totalProp, moneyProp }) {

  const basketItem = basketProp.find(item => item.id === productProp.id)

  const addBasket = () => {

    const checkBasket = basketProp.find(item => item.id === productProp.id)

    if (checkBasket) {
      checkBasket.amount += 1
      setBasketProp([...basketProp.filter(item => item.id !== productProp.id), checkBasket])
    } else {
      setBasketProp([...basketProp.filter(item => item.id !== productProp.id), {
        id: productProp.id,
        title: productProp.title,
        amount: 1
      }])
    }
  }

  const removeBasket = () => {
    const currentBasket = basketProp.find(item => item.id === productProp.id)
    const basketWithoutCurrent = basketProp.filter(item => item.id !== productProp.id)
    currentBasket.amount -= 1

    if (currentBasket.amount === 0) {
      setBasketProp([...basketWithoutCurrent])
    } else {
      setBasketProp([...basketWithoutCurrent, currentBasket])
    }
  }

  return <div className='product'>
    <img src={productProp.image} alt="" width={600} />
    <h1>{productProp.price}₺</h1>
    <h2>{productProp.title}</h2>
    <div className="actions">
      <button disabled={!basketItem} onClick={removeBasket}>-</button>
      <span>{basketItem && basketItem.amount || 0}</span>
      <button disabled={totalProp + productProp.price > moneyProp} onClick={addBasket}>+</button>
    </div >
  </div >
}

export default Product;
