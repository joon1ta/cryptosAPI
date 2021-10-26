import React, {useEffect} from 'react'
import CardsContainer from '../CardsContainer/CardsContainer'
import styles from './Home.module.css'
import {useSelector,useDispatch} from 'react-redux'
import {getCoins} from '../../redux/actions/index'
const Home = () => {

const coins = useSelector(state => state.coins)
const dispatch = useDispatch()

useEffect(() => {
   dispatch(getCoins())
}, [dispatch])



    return (
        <div className={styles.homeContainer}>
            <button>All coins</button>
            <CardsContainer coins={coins} />
          
        </div>
    )
}

export default Home
