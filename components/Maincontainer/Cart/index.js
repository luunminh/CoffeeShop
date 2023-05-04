import React, { useContext, useMemo, useState, useCallback, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, Alert, Modal, TextInput } from 'react-native'
import { styles } from './styles'
import Colors from '../../Colors'
import CartItem from '../../UI/CartItem'
import firebase, { db } from '../../../firebase/config'
import ActiveButton from '../../UI/Button/ActiveButton'
import { Toast } from 'react-native-toast-message/lib/src/Toast.js'
import { AppContext } from '../../../Context/AppProvider'
import { AuthContext } from '../../../Context/AuthProvider'
import * as Location from 'expo-location';
import { doc, setDoc, updateDoc } from 'firebase/firestore'


export default function CartScreen({ navigator }) {
    const [isActivePrompt, setIsActivePrompt] = useState(false)
    const [location, setLocation] = useState(null)
    const { user, setUser } = useContext(AuthContext)
    const { cartList, cart } = useContext(AppContext)
    const [text, setText] = useState(`${user.address ? user.address : ""}`)
    const total = useMemo(() => {
        let rs = cartList.length > 0 ? (cartList.reduce((acc, cur) => {
            return acc + cur.price * cur.quantity
        }, 0)) : 0
        return rs
    }, [cartList])

    const handleChangeAddress = () => {
        setIsActivePrompt(true)
    }

    // update address
    const updateProFile = useCallback(async () => {
        await db.collection('users').where('uid', '==', user.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(documentSnapshot => {
                    documentSnapshot.ref.update({
                        address: text.trim(),
                    }).then(() => {
                        Toast.show({
                            type: 'success',
                            text1: "Update successful!",
                            autoHide: 'true',
                            visibilityTime: 2000
                        })
                    });
                });
            });

        setUser({
            ...user,
            address: text,
        })
    }, [text])

    const handleUpdateAddress = async () => {
        if (text.trim().length > 0) {
            await updateProFile()
            setIsActivePrompt(false)
        } else {
            alert("Invalid Input")
        }

    }
    // pay invoice
    const updateInvoice = async () => {
        const docRef = doc(db, 'bill', cart)
        await updateDoc(docRef, {
            isPaid: true,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })
        Toast.show({
            type: 'success',
            text1: "Paid successful!",
            autoHide: 'true',
            visibilityTime: 2000
        })
        setUser({
            ...user,
        })
    }

    const handlePay = async () => {
        if (!text) {
            alert("Please update your delivery address !!!")
        } else {
            await updateInvoice()
        }
    }
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            // console.log({ location });
            setLocation(location);
        })();
    }, []);


    const getAddressFromCoordinates = async (latitude, longitude) => {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data.address.city);
            const address = `${data.address.road}, ${data.address.city}, ${data.address.country}`;
            setText(address);
        } catch (error) {
            console.log(error);
            // return null;
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Cart</Text>
            </View>
            <View style={styles.listWrap}>
                <ScrollView>
                    <View style={styles.itemContainer}>
                        {cartList.length > 0 ? (cartList.map((item, index) =>
                        (
                            <CartItem key={index} item={item} />
                        )
                        )) : (
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>The cart is empty</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.priceInfo}>
                <ActiveButton text='Change your address' tranScreen={handleChangeAddress} />
                <View style={styles.priceContainer}>
                    <View style={styles.priceWrap}>
                        <Text style={styles.label}>Item cost</Text>
                        <Text style={styles.price}>{`${new Intl.NumberFormat('en-US').format(total)} vnđ`}</Text>
                    </View>
                    <View style={styles.priceWrap}>
                        <Text style={styles.label}>Shipping fee</Text>
                        <Text style={styles.price}>{`${total === 0 ? 0 : `20,000`} vnđ`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.payContainer}>
                <View style={styles.totalWrap}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalPrice}>{`${total === 0 ? 0 : new Intl.NumberFormat('en-US').format(total + 20000)} VNĐ`}</Text>
                </View>
                <ActiveButton text='Pay now' tranScreen={handlePay} />

            </View>
            <Modal transparent={true} visible={isActivePrompt} animationType="fade" style={styles.modal}>
                <View style={styles.modal}>
                    <Text style={styles.modalHeader}>Change Address</Text>
                    <Text style={styles.subTitle}>Enter your new Address</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            value={text}
                            placeholder={"Enter your address"}
                            style={styles.input}
                            placeholderTextColor={Colors.textColor}
                            onChangeText={(txt) => {
                                setText(txt)
                            }}
                        >
                        </TextInput>
                        <TouchableOpacity style={styles.featureBtn}
                            onPress={() => {
                                if (location) {
                                    getAddressFromCoordinates(location.coords.latitude, location.coords.longitude)
                                }
                            }}
                        >
                            <Text style={styles.featureText}>Get current address</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.btnWrap}>
                        <TouchableOpacity style={styles.btn}
                            onPress={(() => {
                                handleUpdateAddress()
                            })}>
                            <Text style={styles.btnText}>Ok</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}
                            onPress={(() => {
                                setIsActivePrompt(false)
                            })}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <Toast />
        </View>
    )
}
