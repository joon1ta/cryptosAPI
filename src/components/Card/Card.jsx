import React from 'react'
import styles from './Card.module.css'
function Card({id,name,price,symbol,img}) {
    return (
        <div className={styles.cardsContainer}>
            <h2>Nombre: {name}</h2>
            <p>Price: ${Math.ceil(price)}</p>
            <p>Symbol: {symbol}</p>
            <img src={img} width="100" alt=''></img>
        </div>
    )
}

export default Card
