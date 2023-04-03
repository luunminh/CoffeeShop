import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 45,
        // justifyContent: "center",
        // paddingTop: 150,
        gap: 40,
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
        width: " 100%",
        marginHorizontal: 20,
        gap: 20,
        // backgroundColor: 'red',
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
        // paddingTop: 30,
    },
    errorMsg: {
        color: Colors.redColor,
        textAlign: "left",
        paddingLeft: 5,
        marginBottom: -12

    },
    titleLabel:
    {
        color: '#FFF',

        marginTop: 0,
        paddingHorizontal: 10,
        marginBottom: -12,
        // fontFamily:"Rosarivo",
        fontSize: 15,
        color: Colors.textColor,
        fontWeight: 600
    },
    btnSave: {
        fontSize: 16,
        fontWeight: 700,
        color: Colors.activeColor,
        color: '#FFF'
    }

})
export default styles