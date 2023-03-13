import React from 'react'
import styles from './styles.js'
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
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
                <TextInput
                    style={styles.inputText}
                    placeholder="Tài khoản"

                >
                </TextInput>
                <TextInput
                    style={styles.inputText}
                    placeholder="Mật khẩu"
                >
                </TextInput>
                <TouchableOpacity style={styles.forgotPasswordBtn}>
                    <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnWrap}>
                <ActiveButton text="Đăng nhập" />
                <DisabledButton text="Đăng ký" tranScreen={transToSignUpScreen} />
            </View>
        </View>
    )
}
