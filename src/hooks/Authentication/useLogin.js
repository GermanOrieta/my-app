import { auth } from '../../firebase'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { usePokemonContex } from '../../context';

export const useLogin = () => {

    const navigate = useNavigate();

    const {user:[,setUser]} = usePokemonContex()


    const login = (username,password) =>  signInWithEmailAndPassword(auth,username, password).then((response) => {

            setUser(response.user)

            navigate('/home')

            

        }).catch((err) =>{

            

        })
    
    
   return { login }

}