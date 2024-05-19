import React from 'react'
import Home from '../components/mainPage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCat from '../components/top/TopCat'
import NewArrivals from '../components/newArrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shop/Shop'
import Annu from '../components/annocuments/Annu'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({ productItems, addToCart, shopItems, MobileState }) => {
  return (
    <>
      <Home MobileState={MobileState}/>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCat />
      <NewArrivals />
      <Discount />
      <Annu />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper/>
    </>
  )
}

export default Pages