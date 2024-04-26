import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import CardLists from './CardLists'

const Home = () => {
  const clearLocaldata =()=>{
    localStorage.clear()
  }

  useEffect(()=>{
    clearLocaldata()
  },[])

  return (
   <>
   <HeroSection/>
  
   </>
  )
}

export default Home