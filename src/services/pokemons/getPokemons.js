import axios from 'axios'

export const getPokemons = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50`)
    return res.data
}