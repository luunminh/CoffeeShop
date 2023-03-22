import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import Colors from '../../Colors'

export default function BackButton({ goBackFunc }) {
    return (

        <TouchableOpacity
            style={styles.btnContainer}
            onPress={goBackFunc}

        >
            <Image
                style={styles.icon}
                source={require('../../../assets/img/back.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10,
        // marginTop: 20,
        borderRadius: 999,
        // backgroundColor: Colors.sideMenuColor
    }
})
