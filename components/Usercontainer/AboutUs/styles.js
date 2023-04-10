import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        justifyContent: "center",
        alignItems:"center",
        paddingVertical: 250,
        gap: 10,

    },
    firstWrap:
    {
        justifyContent: "center",
        alignItems: "center",
    },
    secondWrap:
    {
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        width: 120,
        height: 120,
        borderRadius: 99,
        marginTop: -40,
    },
    
    titleContainer:{
        paddingTop:23,
        fontSize: 22,
        fontWeight : 600,
        color: Colors.activeColor,
        paddingBottom: 8,
        
    },
    txtContainer: {
        fontSize : 14,
        color: Colors.activeColor
    },
    bluecheck:{
        position: 'absolute',
        bottom: 30,
        width: 120,
        height: 120,
        resizeMode: 'contain'
    }

})
export default styles