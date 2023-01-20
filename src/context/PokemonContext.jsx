import { useState, createContext, useContext, useEffect} from 'react'
import { getPokemons } from '../services'

const Context = createContext({})

export const PokemonContextProvider = ({ children }) => {
 
    const [pokemons,setPokemons] = useState()

    const [user,setUser]  = useState()


    useEffect(() => {
        getPokemons().then((data) => setPokemons(data))
    },[])


    return (
        <Context.Provider value={{
            pokemons:[pokemons,setPokemons],
            user:[user,setUser]
        }} >
            {children}
        </Context.Provider>
    )

}


export const usePokemonContex = () => useContext(Context)


// DESETRUCTURACION

//const Persona = () => ({nombre:'matias', apellido:'Miletich'})

//const {nombre, apellido} = Persona()

//console.log(nombre,apellido)