import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Homepage/banner/banner'
import NavBar from './components/navbar/NavBar'
import Players from './components/Players/Players';

const fetchPlayer = async() =>{
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);

  return (
    <>
    <NavBar coin={coin}></NavBar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Players playerPromise={playerPromise}
               setCoin={setCoin} coin={coin}
    ></Players>
    </Suspense>
    </>

  )
}

export default App
