import './App.css';
import {Nav} from './components/Nav/Nav'
//import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import CoinDetails from './components/CoinDetails/CoinDetails'
import {useState} from 'react';
import {Route} from 'react-router-dom';

function App() {


const [realCoins, setRealCoins] = useState()
const filterCoins = (input) => {
  let searchedCoin = realCoins.filter(c => c.name.toUpperCase() === input.toUpperCase());
  setRealCoins(searchedCoin)
}
 
 

   



  return (
    <div className="App">
        <Nav filter={filterCoins} />
        <Route exact path='/'><Home /></Route>
        <Route path='/form'><Form /></Route>
        <Route exact path='/detail/:id'><CoinDetails /></Route>


       
    </div>
  );
}

export default App;
