const URL_FAV = 'https://api.thedogapi.com/v1/favourites'
const API_KEY = '?api_key=7207963f-ba39-4fb6-9297-91c30bfa1c42'

export const borrarFav = async id => {
    const rawData = await fetch(URL_FAV + '/' + id + API_KEY, {
        method: 'DELETE'
    }) 

    return rawData
}