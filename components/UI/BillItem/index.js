import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../Colors'
export default function BillItem({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.itemWrap}>
                <Text style={styles.label}>Bill ID</Text>
                <Text style={styles.content}>102200075</Text>
            </View>
            <View style={styles.itemWrap}>
                <Text style={styles.label}>Status</Text>
                <Text style={styles.content}>Done</Text>
            </View>
            <View style={styles.itemWrap}>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.content}>17:18 - 13/03/2023</Text>
            </View>
            <View style={styles.priceWrap}>
                <Text style={styles.price}>150.000VND</Text>
                <TouchableOpacity style={styles.detailWrap}>
                    <Text style={styles.detailBtn}>Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.itemPriceColor,
        borderRadius: 20,
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 34,
        gap: 12,
    },
    itemWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        fontFamily: "Rosarivo",
        color: "#FFF"
    },
    content: {
        fontWeight: 600,
        color: Colors.activeColor,
        fontSize: 15,
    },
    priceWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#463d46",
        borderRadius: 12,
        paddingLeft: 15,
        marginHorizontal: 10,
        alignItems: 'center',
        marginTop: 6,
    },
    price: {
        fontWeight: 700,
        color: "#FFF",
        fontSize: 15,
    },
    detailWrap: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: Colors.activeColor

    },
    detailBtn: {
        fontWeight: 700,
        color: "#000",
        fontSize: 15,
    }
})
