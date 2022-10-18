import React, { createContext ,useEffect,useState} from 'react';
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config'
export const mycontext = createContext()
const auth = getAuth(app)
const UseContext = ({children}) => {

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const registration  = (email,password) =>{
       return createUserWithEmailAndPassword (auth,email,password)
    }

    const login = (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword (auth, email,password)
    }

    const logout = () =>{
        return signOut(auth)
    }



    useEffect(() => {
      
    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
        setuser(currentuser)
        setloading(false)
    })
      return () => {
        unsubscribe()
      }
    }, [])
    


    const names = {value : 'md tanzil mia'}
    const contextvalue = {names,registration,login,logout,user,loading}
    return (
        <mycontext.Provider value={contextvalue}>
            {children}
        </mycontext.Provider>
    );
};

export default UseContext;