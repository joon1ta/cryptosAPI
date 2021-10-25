import './App.css';
import {Nav} from './components/Nav/Nav'
//import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import CoinDetails from './components/CoinDetails/CoinDetails'
import {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
function App() {


 const [realCoins, setRealCoins] = useState()


useEffect(() => {
   axios.get('https://coinranking1.p.rapidapi.com/coins?rapidapi-key=ef44ec903dmsh785298d0d35ab35p159facjsn23f08d34b188')
    .then(res => {
    setRealCoins(res.data.data.coins)
})
    
}, [])
const allCoins = () => {
  axios.get('https://coinranking1.p.rapidapi.com/coins?rapidapi-key=ef44ec903dmsh785298d0d35ab35p159facjsn23f08d34b188')
    .then((response) =>{
      setRealCoins(response.data.data.coins)
    })
  
}

const filterCoins = (input) => {
  let searchedCoin = realCoins.filter(c => c.name.toUpperCase() === input.toUpperCase());
  setRealCoins(searchedCoin)
}
 
 

   



  return (
    <div className="App">
        <Nav filter={filterCoins} />
        <Route exact path='/'><Home coins={realCoins} allCoins={allCoins}  /></Route>
        <Route path='/form'><Form /></Route>
        <Route exact path='/detail/:id'><CoinDetails /></Route>


       
    </div>
  );
}

export default App;
