import React, { useContext, useState } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import styles from './styles.js'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
import Input from '../UI/Button/Input.js'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, app } from '../../firebase/config.js'
import { AuthContext } from '../../Context/AuthProvider.js'
import { addDocument } from '../../firebase/services.js'
import { StackActions } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast.js'
import toastConfig from '../UI/Toast/index.js'
export default function SignUpScreen({ navigation }) {

    const { user, setUser } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errName, setErrName] = useState(true)
    const [errEmail, setErrEmail] = useState(true)
    const [errPhone, setErrPhone] = useState(true)
    const [errPass, setErrPass] = useState(true)


    const isValidAllInput = () => {
        return ((errName.length === 0) && (errEmail.length === 0)
            && (errPhone.length === 0) && (errPass.length === 0))
    }

    const handleSubmit = () => {
        if (isValidAllInput) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const { providerData } = userCredential.user
                    // console.log({ providerData });
                    const newUser = {
                        uid: email,
                        email: email,
                        phoneNumber: phone,
                        // password: password,
                        photoURL: null,
                        displayName: name,
                    }
                    setUser(newUser)
                    addDocument('users', newUser)
                    navigation.dispatch(
                        StackActions.replace('MainContainer', newUser))

                }).catch(error => {
                    // alert('There are some errors while processing !!!')
                    Toast.show({
                        type: 'error',
                        text1: "Sign up messages",
                        text2: "There are some errors while processing !!!",
                        autoHide: 'true',
                        visibilityTime: 2000

                    })
                    console.log(error);
                })
        } else {
            Toast.show({
                type: 'error',
                text1: "Sign up messages",
                text2: "Sign up failed!",
                autoHide: 'true',
                visibilityTime: 2000,
            })
        }
    }



    return (
        <View style={styles.container}>
            <Image
                style={styles.nameLogo}
                source={require('../../assets/img/nameLogo.png')}
            />
            <Text style={styles.title}>Sign up</Text>

            <View style={styles.inputWrap}>
                {errName.length > 0 && (
                    <Text style={styles.errorMsg}>{errName}</Text>
                )}
                <Input
                    style={styles.inputText}
                    placeholder="Enter your name"
                    setState={setName}
                    setErrState={setErrName}
                    inputType={"input"}

                />
                {errEmail.length > 0 && (
                    <Text style={styles.errorMsg}>{errEmail}</Text>
                )}
                <Input
                    style={styles.inputText}
                    placeholder="Enter your email"
                    setState={setEmail}
                    setErrState={setErrEmail}
                    inputType={"email"}

                />
                {errPhone.length > 0 && (
                    <Text style={styles.errorMsg}>{errPhone}</Text>
                )}
                <Input
                    style={styles.inputText}
                    placeholder="Enter your phone number"
                    setState={setPhone}
                    setErrState={setErrPhone}
                    inputType={"phone"}

                />
                {errPass.length > 0 && (
                    <Text style={styles.errorMsg}>{errPass}</Text>
                )}
                <Input
                    style={styles.inputText}
                    placeholder="Enter your password"
                    passwordCheck={true}
                    setState={setPassword}
                    setErrState={setErrPass}
                    inputType={"password"}

                />
            </View>
            <View style={styles.btnWrap}>
                <ActiveButton text="Sign up" tranScreen={handleSubmit} />
            </View>
            <Toast />

        </View>
    )
}
