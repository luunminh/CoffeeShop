import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet } from 'react-native'
import Header from '../../UI/Header'
import Input from '../../UI/Button/Input'
import Item from '../../UI/Item'
import BillItem from '../../UI/BillItem'
import { AppContext } from '../../../Context/AppProvider'
import Colors from '../../Colors'
import SideBar from '../../UI/SideBar'
export default function BillHistory({ navigation }) {
    const { billList, setBillList } = useContext(AppContext)
    const billLength = billList.filter(bill => bill.isPaid === true).length
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.itemContainer}>
                    {billLength > 0 ? (billList.map((bill, idx) => (
                        <BillItem item={bill} key={idx} navigation={navigation} />)
                    )) : (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>The cart is empty</Text>
                        </View>
                    )
                    }
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bgColor,
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 36,
    },
    itemContainer: {
        flex: 1,
        gap: 30,
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
