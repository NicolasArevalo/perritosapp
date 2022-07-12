const URL_FAV = 'https://api.thedogapi.com/v1/favourites'
const API_KEY = '?api_key=7207963f-ba39-4fb6-9297-91c30bfa1c42'

export const traerFavs = async () => {
    const rawData = await fetch(URL_FAV + API_KEY)
    const data = await rawData.json()

    return {rawData, data}
}