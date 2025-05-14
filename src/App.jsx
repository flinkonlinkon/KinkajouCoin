import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBer from './NavBer'
import Home from './Home'
import CountdownTimer from './CountdownTimer'
import Future from './Future'
import About from './About'
import Work from './Work'
import Question from './Question'
import FAQAccordion from './FAQAccordion'
import Contrac from './Contrac'
import TokenomicsChart from './TokenomicsChart'
import Roadtmap from './Roadtmap'


function App() {
  

  return (
    <>
    <div className='bg-[#07070A] h-full w-full'>

      <NavBer></NavBer>
      <Home></Home>
      <Future></Future>
      <About></About>
      <TokenomicsChart></TokenomicsChart>
      <Roadtmap></Roadtmap>
      <Work></Work>
     <FAQAccordion></FAQAccordion>
     <Contrac></Contrac>
      
    



    </div>
     
    </>
  )
}

export default App
