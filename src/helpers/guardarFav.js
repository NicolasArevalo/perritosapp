const API_KEY = '?api_key=7207963f-ba39-4fb6-9297-91c30bfa1c42'
const URL_FAV = 'https://api.thedogapi.com/v1/favourites'

const HEADERS = {
  'Content-Type': 'application/json',
}

export const guardarFav = async id => {
    const rawData = await fetch(URL_FAV + API_KEY, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
            image_id: id
        })
    })
    
    return rawData
    /* const data = await rawData.json() */

   /*  rawData.status !== 200
        ? mensajear('Something went wrong bro: ' + rawData.status, 'blue')
        : mensajear('Perrito salvado 😍', 'green')

    traerFavoritos() */
}