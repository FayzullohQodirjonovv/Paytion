import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/header'
import Navbar from './assets/components/navbar'
import Showcae from './assets/components/showcase'
import Center from './assets/components/center'
import Lern from './assets/components/lern'
import Frelest from './assets/components/frelest'
import Grid from './assets/components/grid'
import User from './assets/components/user'
import Foks from './assets/components/foks'
import Paytion from './assets/components/paytion'
import Footer from './assets/components/footer'

function App() {
  return (
    <>
   <Header/>
   <Navbar/>
   <Showcae/>
   <Center/>
   <Lern/>
   <Frelest/>
   <Grid/>
   <User/>
   <Foks/>
   <Paytion/>
   <Footer/>
    </>
  )
}

export default App
