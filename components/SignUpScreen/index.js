import React from 'react'
import styles from './styles.js'
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native'
import ActiveButton from '../UI/Button/ActiveButton.js'
import DisabledButton from '../UI/Button/DisabledButton.js'
import Input from '../UI/Button/Input.js'
export default function SignUpScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.nameLogo}
                source={require('../../assets/img/nameLogo.png')}
            />
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.inputWrap}>
                <Input
                    style={styles.inputText}
                    placeholder="Enter your username"

                />
                <Input
                    style={styles.inputText}
                    placeholder="Enter your phone number"

                />
                <Input
                    style={styles.inputText}
                    placeholder="Enter your password"

                />
                <Input
                    style={styles.inputText}
                    placeholder="Confirm your password"
                />
            </View>
            <View style={styles.btnWrap}>
                <ActiveButton text="Sign up" />
            </View>
        </View>
    )
}
