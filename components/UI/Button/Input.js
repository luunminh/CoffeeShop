import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Colors from '../../Colors'
import { isValidEmail, isValidPassword, isValidInput, isValidPhoneNumber } from '../../Validations/Validations'

function Input({ placeholder, passwordCheck, setState, setErrState, inputType }) {
    return (
        <TextInput style={styles.inputText}
            placeholder={placeholder}
            placeholderTextColor={Colors.textColor}
            secureTextEntry={passwordCheck}
            onChangeText={(text) => {
                setState(text)
                switch (inputType) {
                    case 'email': {
                        setErrState(isValidEmail(text) ? "" : "Email not in correct format")
                        break;
                    }
                    case 'password': {
                        setErrState(isValidPassword(text) ? "" : "Password must be at 6 characters")
                        break;
                    }
                    case 'phone': {
                        setErrState(isValidPhoneNumber(text) ? "" : "Phone number not in correct format")
                        break;
                    }
                    case 'input': {
                        setErrState(isValidInput(text) ? "" : "Input not in correct format")
                        break;
                    }
                }
            }
            }
        >
        </TextInput >
    )
}

export default React.memo(Input)


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
