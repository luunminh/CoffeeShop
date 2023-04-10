import React, { useContext, useCallback, useEffect, useState } from "react";
import styles from "./styles";
import Input from "../../UI/Button/Input";
import { AuthContext } from "../../../Context/AuthProvider";
import Colors from "../../Colors";
import { updatePassword } from "firebase/auth";
import { db, auth } from "../../../firebase/config";
import BackButton from "../../UI/DetailItem/BackButton";
import { Toast } from 'react-native-toast-message/lib/src/Toast.js'
import { View, Text } from "react-native";
export default function UserInfoScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [address, setAddress] = useState(user.address)
    const [password, setPassword] = useState('')
    const [errName, setErrName] = useState(true)
    const [errPass, setErrPass] = useState(true)
    const [errPhone, setErrPhone] = useState(true)
    const [errAddress, setErrAddress] = useState(true)

    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    const updateProFile = async () => {

        await db.collection('users').where('uid', '==', user.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(documentSnapshot => {
                    documentSnapshot.ref.update({
                        displayName: name,
                        phoneNumber: phoneNumber,
                        address: address,
                    }).then(() => {
                        Toast.show({
                            type: 'success',
                            text1: "Update successful!",
                            autoHide: 'true',
                            visibilityTime: 2000
                        })
                        if (password.length >= 6) {
                            try {
                                const currentUserNow = auth.currentUser;
                                console.log({ currentUserNow });
                                updatePassword(currentUserNow, password).then(() => {
                                    // alert("cap nhat mk")
                                }).catch((error) => {
                                    Toast.show({
                                        type: 'error',
                                        text1: "Update failed!",
                                        autoHide: 'true',
                                        visibilityTime: 2000
                                    })
                                });
                            } catch (error) {
                                Toast.show({
                                    type: 'error',
                                    text1: "Update failed!",
                                    autoHide: 'true',
                                    visibilityTime: 2000
                                })
                            }
                        }

                    });
                });
            });


        setUser({
            ...user,
            displayName: name,
            phoneNumber: phoneNumber,
            address: address,
        })
    }


    const isValidAllInput = () => {
        return ((errName.length === 0 || errName === true) && (errPass.length === 0 || errPass === true)
            && (errPhone.length === 0 || errPhone === true) && (errAddress.length === 0 || errAddress === true))
    }

    const handleSubmit = () => {
        let isValid = isValidAllInput()
        if (isValid) {
            updateProFile()
        } else {
            Toast.show({
                type: 'error',
                text1: "Update failed!",
                autoHide: 'true',
                visibilityTime: 2000
            })
        }
    }


    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <BackButton goBackFunc={backToPrevPage} />
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        handleSubmit()
                    }}
                >
                    <Text style={styles.btnSave}>Save</Text>
                </TouchableOpacity>
            )
        })
    }, [errAddress, errName, errPass, errPhone])

    return (
        <View style={styles.container}>
            <View style={styles.inputWrap}>
                <Text style={styles.titleLabel}>User Name</Text>
                {errName.length > 0 && (
                    <Text style={styles.errorMsg}>{errName}</Text>
                )}
                <Input
                    valueState={name}
                    setState={setName}
                    style={styles.inputText}
                    placeholder="Enter your name"
                    setErrState={setErrName}
                    inputType={"input"}

                />
                <Text style={styles.titleLabel}>Phone Number</Text>
                {errPhone.length > 0 && (
                    <Text style={styles.errorMsg}>{errPhone}</Text>
                )}
                <Input
                    valueState={phoneNumber}
                    setState={setPhoneNumber}
                    style={styles.phoneNumber}
                    placeholder="Enter your phone number"
                    setErrState={setErrPhone}
                    inputType={"phone"}

                />
                <Text style={styles.titleLabel}>Email</Text>
                <Input
                    valueState={user.uid}
                    style={styles.inputText}
                    placeholder="Enter your email"
                    // setErrState={setErrEmail}
                    inputType={"email"}
                    disable={true}

                />
                {/* <Text style={styles.titleLabel}>User Name</Text>
                    <Input
                        style={styles.inputText}
                        placeholder="Enter your birthday"
                        // setState={setPhone}
                        // setErrState={setErrPhone}
                        inputType={"birthday"}

                    /> */}
                <Text style={styles.titleLabel}>Address</Text>
                {errAddress.length > 0 && (
                    <Text style={styles.errorMsg}>{errAddress}</Text>
                )}
                <Input
                    line={3}
                    valueState={address}
                    setState={setAddress}
                    txtAlign='top'
                    style={styles.inputText}
                    placeholder="Enter your address"
                    setErrState={setErrAddress}
                    inputType={"input"}

                />
                <Text style={styles.titleLabel}>Password</Text>
                {errPass.length > 0 && (
                    <Text style={styles.errorMsg}>{errPass}</Text>
                )}
                <Input
                    style={styles.inputText}
                    setState={setPassword}
                    passwordCheck={true}
                    placeholder="Enter your new password"
                    setErrState={setErrPass}
                    inputType={"password"}

                />
            </View>
            <Toast />
        </View>
    )
}