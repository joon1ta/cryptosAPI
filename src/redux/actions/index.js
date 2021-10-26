import axios from 'axios';

export const GET_COINS = 'GET_COINS'


export const getCoins = () => {
    return function(dispatch) {
        axios.get('https://coinranking1.p.rapidapi.com/coins?rapidapi-key=ef44ec903dmsh785298d0d35ab35p159facjsn23f08d34b188')
            .then(response => {
                return response.data.data.coins
            }).then((data) => {
                return dispatch({
                    type: GET_COINS,
                    payload: data
                })
            })
    } 
}