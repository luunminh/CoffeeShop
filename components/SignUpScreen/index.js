import React, { useState } from 'react'
import styles from './styles.js'
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
import Input from '../UI/Button/Input.js'
export default function SignUpScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errName, setErrName] = useState(true)
    const [errEmail, setErrEmail] = useState(true)
    const [errPhone, setErrPhone] = useState(true)
    const [errPass, setErrPass] = useState(true)
    const [errConfirm, setErrConfirm] = useState("Confirm password is not match!")



    const checkConfirmPass = () => {
        if ((password.trim() === confirmPass.trim() && errPass.length === 0)) {
            return true;
        } else {
            return false
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
                <ActiveButton text="Sign up" />
            </View>
        </View>
    )
}
