import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase/config'
import { updateProfile } from 'firebase/auth';
import LoadingScreen from '../components/LoadingScreen/index.js'
export const AuthContext = createContext();

export default function AuthProvider({ children, navigation }) {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    console.log(auth.currentUser);
    // set Loading screen 
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => {
            clearTimeout(timeOut)
        }

    }, [])




    useEffect(() => {
        
    }, [user])



    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {(isLoading) ? (
                <LoadingScreen />
            ) : children}
        </AuthContext.Provider>
    )
}

