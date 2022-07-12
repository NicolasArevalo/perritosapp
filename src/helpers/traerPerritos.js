const URL = 'https://api.thedogapi.com/v1/images/search?limit='

export const traerPerritos = async (cuantos = 3) => {
    const rawData = await fetch(URL+cuantos)
    const data = await rawData.json()

    return {rawData, data}
}