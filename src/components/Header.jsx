import React from 'react'
import './Header.css';


function Header({ moneyProp, totalProp }) {
	return (
		<div className='header'>
			{
				moneyProp - totalProp === 0 && (
					<h2> Harcayacak paranız kalmadı</h2>
				)
			}
			{
				totalProp === 0 && (
					<h2> Harcamak için {moneyProp}₺ kadar paranız var!</h2>
				)
			}
			{
				totalProp > 0 && moneyProp - totalProp !== 0 && (
					<h2 > Harcamak için {moneyProp - totalProp}₺ kadar paranız var</h2>
				)
			}
		</div >
	)
}

export default Header