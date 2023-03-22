import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Colors from '../../Colors/index.js'
import { AppContext } from '../../../Context/AppProvider.js'
export default function SideBar() {

    const { categories, categoriesIndex, setCategoriesIndex } = useContext(AppContext)
    return (
        <View style={styles.sideMenu}>
            <ScrollView style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}>
                <View style={styles.typeList}>
                    {categories.map((item, index) => (
                        <TouchableOpacity style={styles.typeItem} key={index}
                            onPress={() => {
                                setCategoriesIndex(index)
                            }}
                        >
                            <Text style={((categoriesIndex === index) ? (styles.typeActiveItemText) : (styles.typeItemText))}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    sideMenu: {
        flex: 1,
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 40,
        paddingTop: 30,
        backgroundColor: Colors.sideMenuColor,
        height: "100%",
    },
    scrollContainer: {
        margin: 0,
        padding: 0,
    },
    typeList: {
        flex: 1,
        gap: 20,
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
        fontFamily: "Rosarivo",
    },
    typeActiveItemText: {
        color: Colors.activeColor,
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Rosarivo",

    }
})
