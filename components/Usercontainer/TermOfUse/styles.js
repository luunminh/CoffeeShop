import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        //    justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0,
        gap: 10,
        paddingBottom: 20,

    },
    firstWrap: {
        width: "95%",
        flexDirection: "column",
        //     marginBottom: 32,
        justifyContent: "space-between",
        left: 15,
    },
    titleName: {
        fontSize: 30,
        fontFamily: "Rosarivo",
        color: Colors.activeColor,
        paddingBottom: 6,
        paddingLeft: -4,
        lineHeight: 50,
        // fontWeight: 700,
    },
    txtName: {
        fontSize: 15,
        // fontFamily: "Rosarivo",
        color: "#FFF",
        lineHeight: 26,
        paddingBottom: 25,
        paddingRight: 15,
        fontWeight: 300,
    },
    txtUpdate: {
        fontSize: 15,
        // fontFamily: "Rosarivo",
        color: "#FFF",
        lineHeight: 24,
        paddingBottom: 25,
        paddingRight: 15,
        paddingLeft: 6,
        fontWeight: 300
    },
    headerName: {
        fontSize: 19,
        fontWeight: 600,
        color: Colors.activeColor,
        paddingBottom: 10,
        fontFamily: "Rosarivo",
    },
    secondWrap: {
        width: "95%",
        flexDirection: "column",
        // paddingBottom: 12,
        justifyContent: "space-between",
        left: 15,
    },



})
export default styles