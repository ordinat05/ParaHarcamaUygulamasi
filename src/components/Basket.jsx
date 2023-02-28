import React from 'react'
import BasketItem from './BasketItem'
import "./Basket.css"


function Basket({ totalProp, resetBasketProp, productsProp, basketProp }) {
	return (
		<div className='basket'>
			<div className="head">
				<h1>Harcama Özeti</h1>
			</div>
			{
				basketProp.map(item => (
					<BasketItem key={item.id} itemProp={item} productProp2={productsProp.find(p => p.id === item.id)} />
				))
			}
			<div className="total">
				<h3>Toplam : {totalProp}₺</h3>
			</div>
			<div className="button">
				<button onClick={resetBasketProp}> SEPETİ SIFIRLA</button>
			</div>
		</div >
	)
}

export default Basket
