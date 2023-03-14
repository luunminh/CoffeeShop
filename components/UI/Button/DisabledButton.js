import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Colors from '../../Colors'
export default function DisabledButton({ text, tranScreen }) {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={tranScreen}>
            <Text style={styles.colorText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 316,
        paddingHorizontal: 20,
        paddingVertical: 18,
        backgroundColor: Colors.brownColor,
        borderRadius: 10,
    },
    colorText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 700,
        color: Colors.activeColor,
        fontFamily: "Rosarivo"

    }
})
