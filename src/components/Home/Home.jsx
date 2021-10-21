import React from 'react'
import CardsContainer from '../CardsContainer/CardsContainer'

const Home = ({coins}) => {
    return (
        <div>
            <CardsContainer coins={coins} />
        </div>
    )
}

export default Home
