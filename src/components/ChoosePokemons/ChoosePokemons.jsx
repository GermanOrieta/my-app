import { usePokemonContex } from "../../context"
import Spinner from 'react-bootstrap/Spinner'
import { usePokemonsInfo } from '../../hooks/Pokemons/usePokemonsInfo'

export const ChoosePokemons = () => {
    const { pokemons: [pokemons] } = usePokemonContex()

    const { poke } = usePokemonsInfo({ pokemons })


    return <></>

}