import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        // justifyContent: "center",
        paddingTop: 150,
        gap: 40,
    },
    nameLogo: {

    },
    inputWrap: {
        width: " 80%",
        gap: 20,
    },
    inputText: {
        paddingHorizontal: 10,
        paddingVertical: 14,
        fontSize: 18,
        backgroundColor: Colors.bgInputColor,
        width: "100%",
        borderRadius: 10,
        color: Colors.textColor,
        fontFamily: "Rosarivo"
    },
    forgotPassWrap: {
        alignItems: "center"
    },
    forgotPasswordBtn: {
        width: 140,
    },
    forgotPasswordText: {
        textAlign: "center",
        fontWeight: 600,
        fontSize: 16,
        color: Colors.activeColor,
        fontFamily: "Rosarivo"

    },
    btnWrap: {
        gap: 20,
        paddingTop: 30,
    },
    errorMsg: {
        color: Colors.redColor,
        textAlign: "left",
        paddingLeft: 5,
        marginBottom: -12

    }


})
export default styles