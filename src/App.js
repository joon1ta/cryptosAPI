import './App.css';
import {Nav} from './components/Nav/Nav'
//import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import {useState, useEffect} from 'react';
import axios from 'axios';
function App() {


 const [coins, setCoins] = useState()

useEffect(() => {
   axios.get('https://coinranking1.p.rapidapi.com/coins?rapidapi-key=ef44ec903dmsh785298d0d35ab35p159facjsn23f08d34b188')
    .then(res => {
   
      setCoins(res.data.data.coins)

    })
}, [])


 
 

   



  return (
    <div className="App">
        <Nav />
        <Home coins={coins} />

       
    </div>
  );
}

export default App;
