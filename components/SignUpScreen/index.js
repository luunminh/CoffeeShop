import React from 'react'
import styles from './styles.js'
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
export default function SignUpScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.nameLogo}
                source={require('../../assets/img/nameLogo.png')}
            />
            <Text style={styles.title}>Đăng ký</Text>
            <View style={styles.inputWrap}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Tên tài khoản"

                >
                </TextInput>
                <TextInput
                    style={styles.inputText}
                    placeholder="Số điện thoại"
                >
                </TextInput>
                <TextInput
                    style={styles.inputText}
                    placeholder="Mật khẩu"
                >
                </TextInput>
                <TextInput
                    style={styles.inputText}
                    placeholder="Xác nhận mật khẩu"
                >
                </TextInput>
            </View>
            <View style={styles.btnWrap}>
                <ActiveButton text="Đăng ký" />
            </View>
        </View>
    )
}
