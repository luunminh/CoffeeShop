import { FontWidth } from "@shopify/react-native-skia";
import { SizeClassIOS } from "expo-screen-orientation";
import React from "react";
import { StyleSheet } from 'react-native';
import Colors from '../Colors';

const styles = StyleSheet.create({
    container: {
        paddingTop:25,
        flex: 1,
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        maxWidth: 450,
        gap: 8,
        width: "100%",
        overflow: "hidden",
        paddingHorizontal: 20,
        paddingBottom: 140,
    },
    firstContainer:{
        backgroundColor: Colors.bgColor,
        alignItems: "center",
        paddingHorizontal: 2,
        maxWidth: 450,
        gap: 30,
        width: "100%",
        overflow: "hidden",
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        paddingBottom: 35,
    },
    secondContainer: {
        flex: 1,
        height: "100%",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between",
        paddingRight: 12,
        width: '100%',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 14,
        paddingBottom: 15,
    },
    rowWrapper: {
        width: "100%",
        backgroundColor: Colors.bgColor,
    },
    rowTitle: {
        fontFamily: 'Rosarivo',
        fontSize: 18,
        fontWeight: '400',
        color: '#FFF',
    },
    backIcon:{
        width: 20,
        height: 20,
        width:-5,
        resizeMode: 'contain',
    },
   
    backContainer: {
        height:40,
        width:40,
        position: 'absolute',
        borderRadius: 99,
        justifyContent:'center',
        alignContent:'center',
        paddingTop:0,
        top: 25,
    },
})

export default styles;
