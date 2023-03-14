import React from 'react'
import styles from './styles.js'
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
import Input from '../UI/Button/Input.js'
export default function LoginScreen({ navigation }) {
    const transToSignUpScreen = () => {
        navigation.navigate('SignUpScreen')
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.nameLogo}
                source={require('../../assets/img/nameLogo.png')}
            />
            <View style={styles.inputWrap}>
                <Input
                    style={styles.inputText}
                    placeholder="Username"

                />
                <Input
                    style={styles.inputText}
                    placeholder="Password"

                />
                <TouchableOpacity style={styles.forgotPasswordBtn}>
                    <Text style={styles.forgotPasswordText}>Forgot password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnWrap}>
                <ActiveButton text="Log in" />
                <DisabledButton text="Sign up" tranScreen={transToSignUpScreen} />
            </View>
        </View>
    )
}
