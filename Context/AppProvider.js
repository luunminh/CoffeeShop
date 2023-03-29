import { async } from '@firebase/util';
import React, { useContext, useMemo } from 'react'
import { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import useFirestore from '../hooks/useFirestore.js'
import { AuthContext } from './AuthProvider';
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    // const { user } = useContext(AuthContext)
    const [isReload, setIsReload] = useState(false)
    const [coffeeList, setCoffeeList] = useState([])
    const [categories, setCategories] = useState([])
    const [categoriesIndex, setCategoriesIndex] = useState(0)



    // const favouriteCondition = React.useMemo(() => {
    //     return {
    //         fieldName: 'userId',
    //         operator: '==',
    //         compareValue: user.uid,
    //     };
    // }, [user]);

    // const favouriteList = useFirestore('favourite', favouriteCondition)
    useEffect(() => {
        console.log("reset...");
        let collectionRef = db.collection('coffee')
        const unsubscribe = collectionRef.onSnapshot((snapshot) => {
            const newDocs = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setCoffeeList(newDocs);
            let categoriesList = newDocs.map((item) => {
                return item.categories
            })
            setCategories(() => {
                let arr = [... new Set(categoriesList)]
                arr.push("All");
                // console.log(arr);
                return arr.reverse();
            })
            setCategoriesIndex(0)
        });

        return unsubscribe;
    }, [isReload])


    useEffect(() => {
        console.log("reset coffeeList");
        let categoriesList = coffeeList.map((item) => {
            return item.categories
        })
        setCategories(() => {
            let arr = [... new Set(categoriesList)]
            arr.push("All");
            // console.log(arr);
            return arr.reverse();
        })
        setCategoriesIndex(0)
    }, [coffeeList])

    return (
        <AppContext.Provider value={{
            coffeeList, setCoffeeList, isReload, setIsReload, categories, setCategories
            , categoriesIndex, setCategoriesIndex
        }}>
            {children}
        </AppContext.Provider>
    )

}

