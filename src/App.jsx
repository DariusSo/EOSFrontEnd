import './App.css'
import { MovingEventCards } from './pages/MovingEventCards'
import { DialogDefault } from './components/NewsLetterPopUp'
import Navbar from './components/Navbar'
import { useState } from 'react'
import StationaryCards from './pages/StationaryCards'
import CardsPosition from './components/cards/CardsPosition'



function App() {

  const [data, setData] = useState([]);
  const [isTidy, setIsTidy] = useState(false);

  return (
    <>
      <Navbar/>
      <img src="/src/assets/img/banner3.jpg" className="border-4 border-lime-300"></img>
      <CardsPosition setData={ setData } setIsTidy={setIsTidy} isTidy={isTidy}/>
      {isTidy ? <StationaryCards setIsTidy={setIsTidy} setData={ setData } data={data} /> : <MovingEventCards setIsTidy={setIsTidy} setData={ setData } data={data}/>}
      <DialogDefault/>
    </>
  )
}

export default App
