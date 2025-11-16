import React from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Brands from './components/Brands.jsx'
import Review from './components/Review.jsx'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Brands/>
      <Review/>
    </div>
  )
}

export default App