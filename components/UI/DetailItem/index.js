import React, { useCallback, useContext, useEffect, useState, useMemo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../firebase/config';
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import Colors from '../../Colors'
import ActiveButton from '../Button/ActiveButton'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../../Context/AuthProvider';
import BackButton from './BackButton';
import { AppContext } from '../../../Context/AppProvider';
import { Toast } from 'react-native-toast-message/lib/src/Toast.js'
import { addDocument, delDocument } from '../../../firebase/services';
export default function DetailItem({ route, navigation }) {
    const { user } = useContext(AuthContext)
    const { coffeeList, setCoffeeList, cart, favouriteList, setIsFavouriteList, cartList, setCartList } = useContext(AppContext)
    const { elm } = route.params
    const [favourite, setIsFavourite] = useState(false)
    const [isReload, setIsReload] = useState(false)
    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const showAddedCartToast = () => {
        Toast.show({
            type: 'success',
            text1: "Added to your cart!",
            // text2: "There are some errors while processing !!!",
            autoHide: 'true',
            visibilityTime: 1000
        })
    }

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <BackButton goBackFunc={backToPrevPage} />
            )
        })
    }, [])

    useEffect(() => {
        let favList = favouriteList.map((item) => item.coffeeId)
        setIsFavourite(favList.includes(elm.id))
    }, [favourite, favouriteList])

    useEffect(() => {
        async function updateData() {
            if (isReload) {
                const docRef = doc(db, 'coffee', elm.id)
                await setDoc(docRef, elm);
                await updateDoc(docRef, {
                    isfavourite: favourite
                });
                if (favourite) {
                    Toast.show({
                        type: 'success',
                        text1: "Added to your favorites",
                        // text2: "There are some errors while processing !!!",
                        autoHide: 'true',
                        visibilityTime: 1000
                    })
                } else {
                    Toast.show({
                        type: 'success',
                        text1: "Removes to your favorites",
                        // text2: "There are some errors while processing !!!",
                        autoHide: 'true',
                        visibilityTime: 1000

                    })
                }
                setIsReload(false)
            }
        }
        updateData()

    }, [isReload])
    return (
        <View style={styles.container}>
            <Image
                style={styles.itemImg}
                source={{ uri: `${elm.image}` }}
            />
            <View style={styles.nameWrap}>
                <Text style={styles.itemName}>{elm.name}</Text>
                <TouchableOpacity style={styles.favouriteWrap}
                    onPress={() => {
                        if (favourite) {
                            const rs = favouriteList.find(item => item.coffeeId === elm.id)
                            console.log(rs.id);
                            delDocument('favourite', rs.id)
                            Toast.show({
                                type: 'success',
                                text1: "Removes to your favorites",
                                // text2: "There are some errors while processing !!!",
                                autoHide: 'true',
                                visibilityTime: 1000
                            })
                        } else {
                            addDocument('favourite', {
                                userId: user.uid,
                                coffeeId: elm.id,
                            })
                            Toast.show({
                                type: 'success',
                                text1: "Added to your favorites",
                                // text2: "There are some errors while processing !!!",
                                autoHide: 'true',
                                visibilityTime: 1000
                            })
                        }
                        setIsReload(prev => !prev)
                        setIsFavourite(prev => !prev)
                    }}
                >
                    <Ionicons name={`${(favourite) ? 'heart' : 'heart-outline'}`} size={30} color={`${favourite ? Colors.redColor : Colors.activeColor}`} />
                </TouchableOpacity>
            </View>
            <View style={styles.descWrap}>
                <ScrollView>
                    <Text style={styles.itemDesc}>{elm.description}</Text>
                </ScrollView>
            </View>
            <View style={styles.priceWrap}>
                <Text style={styles.priceTitle}>Price</Text>
                <Text style={styles.itemPrice}>{`${new Intl.NumberFormat('en-US').format(elm.price)} VNĐ`}
                </Text>
            </View>
            <ActiveButton text='Buy now' tranScreen={() => {
                setCartList(() => {
                    let rs = []
                    if (cartList.find(item => elm.id === item.coffeeId) !== undefined) {
                        console.log("check");
                        rs = cartList.map((item => {
                            if (item.coffeeId === elm.id) {
                                item = { ...item, quantity: item.quantity + 1 }
                            }
                            return item
                        }))
                    } else {
                        addDocument('bill_detail', {
                            billId: cart,
                            quantity: 1,
                            coffeeId: elm.id
                        })
                        rs = [...cartList, {
                            ...elm,
                            coffeeId: elm.id,
                            quantity: 1,
                            billId: cart
                            //id
                        }]
                    }
                    showAddedCartToast()
                    return rs
                })
            }} />
            <Toast />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        padding: 16,
        alignItems: "center",
        paddingTop: 0,
    },
    itemImg: {
        width: "98%",
        height: 411,
        borderRadius: 40,
        marginBottom: 18,
    },
    nameWrap: {
        width: "95%",
        flexDirection: "row",
        marginBottom: 12,
        justifyContent: "space-between",
    },
    itemName: {
        fontSize: 24,
        fontFamily: "Rosarivo",
        // lineHeight: 30,
        color: "#FFF",
    },
    descWrap: {
        width: "95%",
        maxHeight: 80
    },
    itemDesc: {
        fontSize: 14,
        color: "#FFF",
        fontFamily: "Rosarivo",
        lineHeight: 20,
        textAlign: 'left',
    }
    , priceWrap: {
        width: "95%",
        marginTop: 20,
        marginBottom: 26,
        gap: 12,
        alignItems: "flex-start",
    },
    priceTitle: {
        fontSize: 25,
        fontFamily: "Rosarivo",
        color: "#FFF",

    },
    itemPrice: {
        color: "#D2AF84",
        fontWeight: 700,
        fontSize: 26,
        lineHeight: 27,

    }

})
