import axios from 'axios'

export const getPokemonsInfo = ({ pokemons }) => {

    const pokemonsFake = pokemons?.results ?? []


    return Promise.all(pokemonsFake.map((pokemon) => axios.get(pokemon.url)))
        .then(res => {
            return {
                data: res,
                success: true
            }
        });
}