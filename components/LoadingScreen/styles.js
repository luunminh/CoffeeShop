import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    nameLogo: {

    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: "99%",
    },

})
export default styles