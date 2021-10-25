import React from 'react'
import styles from './Card.module.css'
import {Link} from 'react-router-dom'
function Card({id,name,price,symbol,img}) {
    return (
        <Link to={`/detail/${id}`}>
        <div className={styles.cardsContainer}>
            <div className={styles.cardsTitle}>
               <img src={img} width="100" alt=''></img> 
               <h2 className={styles.h2Container}>Nombre: <span className={styles.spanContainer}>{name}</span></h2>
            </div>
            
           
            <p>Price:  ${Math.ceil(price)}</p>
            <p>Symbol: {symbol}</p>
            
        </div>
        </Link>
    )
}

export default Card
