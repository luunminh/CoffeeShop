import { async } from '@firebase/util';
import React, { useContext, useMemo } from 'react'
import { useState, useEffect } from 'react';
import firebase, { auth, db, storage } from '../firebase/config';
import useFirestore from '../hooks/useFirestore.js'
import { AuthContext } from './AuthProvider';
import { addDocument } from '../firebase/services';
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const { user } = useContext(AuthContext)
    const [isReload, setIsReload] = useState(false)
    const [coffeeList, setCoffeeList] = useState([])
    const [categories, setCategories] = useState([])
    const [categoriesIndex, setCategoriesIndex] = useState(0)
    const [favouriteList, setIsFavouriteList] = useState([])
    const [cart, setCart] = useState('')
    const [cartList, setCartList] = useState([])
    useEffect(() => {
        console.log("re-render set coffeeList and categories");
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
    }, [isReload, user])



    useEffect(() => {
        if (user.uid) {
            console.log("favor2");
            let collectionRef = db.collection('favourite')
            collectionRef = collectionRef.where(
                'userId',
                '==',
                user.uid
            );
            const unsubscribe = collectionRef.onSnapshot((snapshot) => {
                const newDocs = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                let newData = newDocs.map((item) => {
                    return {
                        coffeeId: item.coffeeId,
                        id: item.id
                    }
                })
                // console.log(newData);
                setIsFavouriteList(newData)
                return;
            });
            return unsubscribe;
        }
    }, [isReload, user])

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

    useEffect(() => {
        console.log("reload cart");
        if (user.uid) {
            let collectionRef = db.collection('bill')
            collectionRef = collectionRef.where(
                'userId',
                '==',
                user.uid
            );
            const unsubscribe = collectionRef.onSnapshot((snapshot) => {
                const newDocs = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                if (newDocs.length > 0) {
                    let newData = newDocs.filter((item) => {
                        return item.isPaid === false
                    })
                    if (newData.length === 1) {
                        setCart(newData[0].id)
                    } else {
                        addDocument('bill', {
                            isPaid: false,
                            time: firebase.firestore.FieldValue.serverTimestamp(),
                            userId: user.uid,
                        })
                        setCartList([])
                    }
                    // console.log(newData)
                } else {
                    addDocument('bill', {
                        isPaid: false,
                        time: firebase.firestore.FieldValue.serverTimestamp(),
                        userId: user.uid,
                    })
                    setCartList([])
                }
                return;
            });
            return unsubscribe
        }
    }, [user, cartList])


    useEffect(() => {
        if (cart && coffeeList.length > 0) {
            // console.log(cart)
            let collectionRef = db.collection('bill_detail')
            collectionRef = collectionRef.where(
                'billId',
                '==',
                cart
            );
            const unsubscribe = collectionRef.onSnapshot((snapshot) => {
                const newDocs = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                const newData = newDocs.map((item, index) => {
                    let coffeeItem = coffeeList.find((coffee) => {
                        return coffee.id === item.coffeeId
                    })
                    return {
                        ...coffeeItem,
                        coffeeId: coffeeItem.id,
                        id: item.id,
                        quantity: item.quantity,
                        billId: item.billId
                    }
                })
                // console.log(newData)
                setCartList(newData)
                return;
            });
            return unsubscribe
        }
    }, [cart, coffeeList])


    return (
        <AppContext.Provider value={{
            coffeeList, setCoffeeList, isReload, setIsReload, categories, setCategories
            , categoriesIndex, setCategoriesIndex, favouriteList, setIsFavouriteList,
            cartList, setCartList, cart, setCart
        }}>
            {children}
        </AppContext.Provider>
    )

}

