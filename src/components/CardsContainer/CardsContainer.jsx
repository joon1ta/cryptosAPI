import React from 'react'
import Card from '../Card/Card'
import styles from './CardsContainer.module.css'
function CardsContainer({coins}) {
    if(coins) {
      return (
        <div className={styles.gridContainer}>
            {
                coins.map(coin =>  <Card 
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    price={coin.price}
                    symbol={coin.symbol}
                    img={coin.iconUrl}
                />)
            }
           
        </div>
    )  
    } else {
        return (
            <div>No hay coins</div>
        )
    }
    
}

export default CardsContainer
