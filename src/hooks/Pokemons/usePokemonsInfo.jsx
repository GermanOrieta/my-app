import { getPokemonsInfo } from '../../services'
import { useEffect, useState } from 'react'


export const usePokemonsInfo = ({ pokemons }) => {

    const [poke, setPoke] = useState()


    useEffect(() => {
        getPokemonsInfo({ pokemons }).then((result) => {
            setPoke(result)
        })
    })


    return { poke }




}