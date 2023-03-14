import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        paddingTop: 30,
        gap: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 500,
        color: Colors.activeColor,
        fontFamily: "Rosarivo",
        // textTransform: "uppercase"

    },
    nameLogo: {

    },
    inputWrap: {
        width: " 80%",
        gap: 24,
        alignItems: "center"
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
    forgotPasswordBtn: {
        width: 140,
    },
    forgotPasswordText: {
        textAlign: "center",
        fontWeight: 600,
        fontSize: 16,
        color: Colors.textColor

    },
    btnWrap: {
        gap: 20,
        paddingTop: 30,
    },


})
export default styles