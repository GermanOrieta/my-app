import { usePokemonContex } from "../../context"


export const Navigation = () => {
    
    const { pokemons: [pokemons,setPokemons] } = usePokemonContex()

    console.log(pokemons)

    console.log(setPokemons)

    

    return (
        <h1>lala</h1>
    )
}