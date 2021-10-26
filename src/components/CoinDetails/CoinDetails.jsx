import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import styles from './CoinDetails.module.css'
function CoinDetails(props) {
const [coin, setCoin] = useState()
   // const {id} = props.match.params
   const {id} = useParams()

   useEffect(() => {
    axios.get(`https://coinranking1.p.rapidapi.com/coin/${id}?rapidapi-key=ef44ec903dmsh785298d0d35ab35p159facjsn23f08d34b188`)
    .then(response => {
        setCoin(response.data.data.coin)
       
    })
   },[id])
    


 

    return (
        <div className={styles.container}>
           {
            coin ? (
            <div>
                  <h2>{coin.name}</h2>
                  <div className={styles.containerFlex}>
                       <div className={styles.ContainerImg}>
                            <img src={coin.iconUrl} alt="" width="200"/>
                       </div>
           
                        
                    <div className={styles.containerPrice}>
                    <p><span>Precio:</span> ${Math.ceil(coin.price)}</p>
                    <p>{coin.description.replace(/<[^>]*>?/gm, "")}</p>
                    </div>
                  </div>
               

            <h4>Mas info haz click aca: <a href={coin.websiteUrl} target="blank">Click</a></h4> 
            </div> ) : 

            <div>
                <h1>Loading Coin</h1>
            </div>
        } 
        </div>
        
        
    )
}

export default CoinDetails


// 

// https://coinranking1.p.rapidapi.com/coins?rapidapi-key=ef44ec903dmsh785298d0d35ab35p159facjsn23f08d34b188