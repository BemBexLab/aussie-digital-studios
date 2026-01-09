import React from 'react'
import Hero from './components/Hero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JobPosting from './components/JobPosting'

const CareerPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <JobPosting />
        <Footer />
    </div>
  )
}

export default CareerPage