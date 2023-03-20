import { async } from '@firebase/util';
import React from 'react'
import { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import useFirestore from '../hooks/useFirestore.js'


export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [isReload, setIsReload] = useState(false)
    const [coffeeList, setCoffeeList] = useState([])

    useEffect(() => {
        console.log("reset...");
        let collectionRef = db.collection('coffee')
        const unsubscribe = collectionRef.onSnapshot((snapshot) => {
            const newDocs = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setCoffeeList(newDocs);
        });

        return unsubscribe;
    }, [isReload])

    return (
        <AppContext.Provider value={{ coffeeList, setCoffeeList, isReload, setIsReload }}>
            {children}
        </AppContext.Provider>
    )

}

