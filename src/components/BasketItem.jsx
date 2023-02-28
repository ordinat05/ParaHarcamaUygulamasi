import React from 'react'

function BasketItem({ itemProp, productProp2 }) {
	return (
		<div className='basketItem'>
			<h3>{productProp2.title} X {itemProp.amount} </h3>
		</div>
	)
}

export default BasketItem
