import React from 'react'
import CardsContainer from '../CardsContainer/CardsContainer'
import styles from './Home.module.css'

const Home = ({coins, allCoins}) => {

const handleClick = () => {
    allCoins()
}

    return (
        <div className={styles.homeContainer}>
            <button onClick={handleClick}>All coins</button>
            <CardsContainer coins={coins} />
          
        </div>
    )
}

export default Home
