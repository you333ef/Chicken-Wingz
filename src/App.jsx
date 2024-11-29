import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import CATEGORY from './CATEGORY'
import Simple from './Simple'
import EveryOne from './EveryOne'
import Check from './Check'
import Try from './Try'
import Delicious from './Delicious'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CATEGORY/>
      <Simple/>
      <EveryOne/>
      <Check/>
      <Try/>
      <Delicious/>
    </div>
  )
}

export default App