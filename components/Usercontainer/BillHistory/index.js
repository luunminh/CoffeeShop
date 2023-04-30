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
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.itemContainer}>
                    <BillItem />
                    <BillItem />
                    <BillItem />
                    <BillItem />
                    <BillItem />
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
    }
})
