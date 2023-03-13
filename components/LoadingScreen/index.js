import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles.js'
export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.nameLogo}
                source={require('../../assets/img/nameLogo.png')}
            /><Image
            style={styles.logo}
            source={require('../../assets/img/logo.jpg')}
        />
        </View>
    )
}
