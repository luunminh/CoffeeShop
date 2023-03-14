import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Colors from '../../Colors'
export default function Input({ placeholder }) {
    return (
        <TextInput style={styles.inputText}
            placeholder={placeholder}
            placeholderTextColor={Colors.textColor}
        >
        </TextInput >
    )
}


const styles = StyleSheet.create({
    inputText: {
        paddingHorizontal: 12,
        paddingVertical: 14,
        fontSize: 16,
        backgroundColor: Colors.bgInputColor,
        width: "100%",
        borderRadius: 10,
        color: Colors.activeColor,
        fontFamily: "Rosarivo",

    }
})
