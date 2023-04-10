import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "90%",
        flexDirection: "row",
        flexWrap: 'wrap',
       justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.bgColor
    
    },
    row: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 14,
        paddingBottom: 15,
        borderStyle: "dashed",
        borderColor: "#4D444D",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    rowWrapper: {
        width: "100%",
        backgroundColor: Colors.bgColor,
    },
    rightSide: {
      left: 20,
      flexDirection:"column",  
    },
    rowTitle: {
        fontFamily: 'Rosarivo',
        fontSize: 16,
        fontWeight: '400',
        color: '#FFF',
        marginTop: 1,
    },
    detailTitle:{
        top: 3,
        fontSize: 16,
        color: Colors.activeColor,
        fontFamily:'Rosarivo'
    },
    backIcon: {
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
      //  marginLeft: -10,
      //  borderRadius: 99,
        top : 10,
        
        
    }
})
export default styles;