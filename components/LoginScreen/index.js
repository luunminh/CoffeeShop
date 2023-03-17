import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.js'
import { View, TouchableOpacity, Text, Image, TextInput, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
import Input from '../UI/Button/Input.js'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth, app } from '../../firebase/config.js'
import { AuthContext } from '../../Context/AuthProvider.js'


export default function LoginScreen({ navigation }) {



    // state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errEmail, setErrEmail] = useState(true)
    const [errPass, setErrPass] = useState(true)


    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("password reset email has been sent successfully!")
            })
            .catch(error => {
                alert("Your email account is not correct!")
            })

    }



    const transToSignUpScreen = () => {
        navigation.navigate('SignUpScreen')
    }

    const transToMainContainer = () => {
        if (errEmail.length === 0 && errPass.length === 0) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    navigation.navigate('MainContainer')
                }).catch(error => {
                    console.log(error);
                    alert(error)
                })
        } else {
            alert("Email or Password is not correct!")
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.nameLogo}
                source={require('../../assets/img/nameLogo.png')}
            />
            <View style={styles.inputWrap}>
                {errEmail.length > 0 && (
                    <Text style={styles.errorMsg}>{errEmail}</Text>
                )}
                <Input
                    style={styles.inputText}
                    placeholder="Email"
                    setState={setEmail}
                    setErrState={setErrEmail}
                    inputType={"email"}
                />
                {errPass.length > 0 && (
                    <Text style={styles.errorMsg}>{errPass}</Text>
                )}
                <Input
                    style={styles.inputText}
                    placeholder="Password"
                    passwordCheck={true}
                    setState={setPassword}
                    setErrState={setErrPass}
                    inputType={"password"}


                />

                <View style={styles.forgotPassWrap}>
                    <TouchableOpacity style={styles.forgotPasswordBtn}
                        onPress={handlePasswordReset}>
                        <Text style={styles.forgotPasswordText}>Forgot password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnWrap}>
                <ActiveButton text="Log in" tranScreen={transToMainContainer} />
                <DisabledButton text="Sign up" tranScreen={transToSignUpScreen} />
            </View>
        </View>
    )
}
