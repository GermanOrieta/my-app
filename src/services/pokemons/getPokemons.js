import axios from 'axios'

export const getPokemons = async() => {
    const res =   await axios.get(`https://pokeapi.co/api/v2/pokemon/${"ditto" }`)
    return res.data
}