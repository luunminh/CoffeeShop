import React, { useCallback, useContext, useEffect, useState, useMemo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../firebase/config';
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import Colors from '../../Colors'
import ActiveButton from '../Button/ActiveButton'
import { AuthContext } from '../../../Context/AuthProvider';
import BackButton from './BackButton';
import { AppContext } from '../../../Context/AppProvider';
import { Toast } from 'react-native-toast-message/lib/src/Toast.js'
import { addDocument, delDocument } from '../../../firebase/services';
export default function DetailItem({ route, navigation }) {
    const { user } = useContext(AuthContext)
    const { coffeeList, setCoffeeList, favouriteList, setIsFavouriteList } = useContext(AppContext)
    const { elm } = route.params
    const [favourite, setIsFavourite] = useState(false)
    const [isReload, setIsReload] = useState(false)
    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])


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
                <Text style={styles.itemDesc}>{elm.description}</Text>
            </View>
            <View style={styles.priceWrap}>
                <Text style={styles.priceTitle}>Price</Text>
                <Text style={styles.itemPrice}>{`${new Intl.NumberFormat('en-US').format(elm.price)} VNĐ`}
                </Text>
            </View>
            <ActiveButton text='Buy now' />
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
