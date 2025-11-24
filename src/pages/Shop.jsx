import React from 'react'
import HeroSection  from "../components/HeroSection"
import Filter from '../components/shop/Filter'
import Products from '../components/shop/Products'
import Services from '../components/Services'

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
      <div>
        <Services/>
      </div>
    </div>
  ) 
}

export default Shop