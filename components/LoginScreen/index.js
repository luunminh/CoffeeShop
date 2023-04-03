import React, { useCallback, useContext, useEffect, useState } from 'react'
import styles from './styles.js'
import { View, TouchableOpacity, Text, Image, TextInput, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
import Input from '../UI/Button/Input.js'
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth'
import { auth, app } from '../../firebase/config.js'
import { AuthContext } from '../../Context/AuthProvider.js'
import { Toast } from 'react-native-toast-message/lib/src/Toast.js'
import toastConfig from '../UI/Toast/index.js'
import { db } from '../../firebase/config.js'

export default function LoginScreen({ navigation }) {
    const { setUser } = useContext(AuthContext)
    // state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errEmail, setErrEmail] = useState(true)
    const [errPass, setErrPass] = useState(true)




    const fetchData = (collection, condition) => {
        let collectionRef = db.collection(collection)
        collectionRef = collectionRef.where(
            condition.fieldName,
            condition.operator,
            condition.compareValue
        );
        const unsubscribe = collectionRef.onSnapshot((snapshot) => {
            const newDocs = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            const { uid, email: userEmail, phoneNumber, photoURL, displayName } = newDocs[0]
            const data = { uid, userEmail, phoneNumber, photoURL, displayName }
            // console.log(data);
            setUser(() => {
                return { uid, userEmail, phoneNumber, photoURL, displayName }
            })
            return newDocs
        });
    }



    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // alert("password reset email has been sent successfully!")
                Toast.show({
                    type: 'success',
                    text1: "Reset password messages",
                    text2: "password reset email has been sent successfully!",
                    autoHide: 'true',
                    visibilityTime: 2000,
                })
            })
            .catch(error => {
                alert("Your email account is not correct!")
            })
    }



    const transToSignUpScreen = useCallback(() => {
        navigation.navigate('SignUpScreen')
    }, [navigation])

    const transToMainContainer = useCallback(() => {
        if (errEmail.length === 0 && errPass.length === 0) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    fetchData('users', {
                        fieldName: 'email',
                        operator: '==',
                        compareValue: email.trim(),
                    })
                    setEmail('')
                    setPassword('')
                    navigation.navigate('MainContainer')
                }).catch(error => {
                    console.log(error);
                    // alert(error)
                    Toast.show({
                        type: 'error',
                        text1: "Error",
                        text2: "Your email or password is not correct!",
                        autoHide: 'true',
                        visibilityTime: 2000
                    })
                })
        } else {
            // alert("Email or Password is not correct!")
            Toast.show({
                type: 'error',
                text1: "Error",
                text2: "Your email or password is not correct!",
                autoHide: 'true',
                visibilityTime: 2000
            })
        }
    }, [errEmail, errPass])

    return (
        <View style={styles.container}>
            <Toast config={toastConfig} />
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