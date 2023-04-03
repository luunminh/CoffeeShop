import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Colors";


export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        // paddingHorizontal: 20,
        maxWidth: 450,
        gap: 8,
        width: "100%",
        overflow: "hidden",
        paddingHorizontal: 18,
    },
    titleWrap: {
    },
    title: {
        fontFamily: "Rosarivo",
        color: '#FFF',
        fontSize: 26,
        lineHeight: 33,
        textAlign: "center"
    },
    listWrap: {
        width: "100%",
        marginVertical: 15,
        backgroundColor: Colors.bgInputColor,
        flex: 0.69,
        borderRadius: 8,
    },
    itemContainer: {
        width: "100%",
        gap: 15,
    },
    priceInfo: {
        flex: 0.30,
        width: "100%",
        borderColor: '#4D444D',
        borderStyle: "dashed",
        paddingVertical: 17,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        gap: 18,
        paddingBottom: 20,
    },
    priceContainer: {
        gap: 8,
    },
    priceWrap: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        color: '#FFF',
        lineHeight: 20,
        fontFamily: "Rosarivo",
    }
    , price: {
        fontSize: 16,
        color: '#FFF',
        lineHeight: 18,
        fontWeight: 600
    },
    payContainer: {
        width: '100%',
        gap: 28
    },
    totalWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    totalLabel: {
        fontSize: 24,
        lineHeight: 30,
        color: "#FFF",
        fontFamily: 'Rosarivo'
    },
    totalPrice: {
        fontSize: 24,
        color: "#FFF",
        lineHeight: 30,
        fontWeight: 700,
    },
    errorContainer: {
        alignItems: "center",
        height: 250,
        width: "100%",
        justifyContent: "center",
    },
    errorText: {
        textAlign: "center",
        fontSize: 22,
        fontFamily: "Rosarivo",
        width: "60%",
        color: Colors.textColor

    },


})