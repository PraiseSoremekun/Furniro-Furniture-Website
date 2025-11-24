import React from 'react'
import HeroSection  from "../components/HeroSection"
import Filter from '../components/shop/Filter'
import Products from '../components/shop/Products'

function Shop() {
  return (
    <div>
      <div className="w-full">
        <HeroSection 
        heroHeading="Shop" 
        heroTitle={Shop}/>
      </div>
      <div>
        <Filter/>
      </div>
      <div>
        <Products/>
      </div>
    </div>
  ) 
}

export default Shop