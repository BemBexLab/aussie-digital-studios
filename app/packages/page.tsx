import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Hero from './components/Hero'
import PricingPlan from './components/PricingPlan'
import BrandLevelUp from './components/BrandLevelUp'

const PackagePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <PricingPlan />
        <BrandLevelUp />
        <div className="w-full h-30"></div>
        <Footer />
    </div>
  )
}

export default PackagePage