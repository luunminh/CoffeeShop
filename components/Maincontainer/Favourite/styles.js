import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Colors";


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        // paddingHorizontal: 20,
        maxWidth: 450,
        gap: 20,
        width: "100%",
        overflow: "hidden"
    },
    // first container
    firstContainer: {
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        paddingHorizontal: 20,
        maxWidth: 450,
        gap: 20,
        width: "100%",
        overflow: "hidden"
    },
    searchWrap: {
        paddingLeft: 15,
        backgroundColor: Colors.bgInputColor,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        width: "100%",
        gap: 7,
        borderRadius: 10,
        overflow: "hidden"
    },
    searchIcon: {
        marginLeft: 34,
    },

    // second Container
    secondContainer: {
        flex: 1,
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    scrollContainer: {
        margin: 0,
        padding: 0,
    },
    typeList: {
        flex: 1,
        gap: 30,
        paddingTop: 10,
    }
    , typeItem: {
        transform: [{ rotate: '-90deg' }],
        marginVertical: 20,
        marginHorizontal: -16,
        // backgroundColor: "#ccc",
    }
    , typeItemText: {
        color: Colors.textColor,
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Rosarivo"
    }
    , rightSide: {
        flex: 8,
        alignItems: "center",
        // backgroundColor: "#ccc",

    },
    listItem: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        width: "100%",
        justifyContent: "center"
    }


})
export default styles