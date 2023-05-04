import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import Colors from '../../Colors'
import React from 'react'

function BillTag({ elm }) {
    return (
        <TouchableOpacity style={styles.tagWrap}>
            <View style={styles.leftSide}>
                <Image
                    style={styles.itemImg}
                    source={{ uri: `${elm.image}` }}
                />
            </View>
            <View style={styles.rightSide}>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>{elm.name}</Text>
                    <Text style={styles.categories}>{elm.categories}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.quantity}>
                        <Text style={styles.quantityText}>{`x${elm.quantity}`}</Text>
                    </View>
                    <Text style={styles.price}>{`${new Intl.NumberFormat('en-US').format(elm.price)} vnđ`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function BillDetailItem({ route }) {
    const { listBill } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>Bill ID</Text>
                <Text style={styles.info}>{listBill[0].id}</Text>
            </View>
            <Text style={styles.note}>[ The default shipping fee within the city is 20.000 vnđ ].</Text>
            <View style={styles.itemContainer}>
                <ScrollView>
                    <View style={styles.itemWrap}>
                        {listBill.map((elm, idx) => (
                            <BillTag key={idx} elm={elm} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingBottom: 35,
    },
    header: {
        flexDirection: 'row',
        gap: 40,
        marginBottom: 8,
    },

    label: {
        color: "#FFF",
        fontSize: 14,
        fontFamily: "Rosarivo",

    },
    info: {
        color: Colors.activeColor

    },
    itemContainer: {
        marginTop: 10,
        backgroundColor: Colors.itemPriceColor,
        borderRadius: 10,
        flex: 1,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    itemWrap: {
        gap: 30,
    },
    tagWrap: {
        backgroundColor: "#4A414A",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftSide: {

    },
    itemImg: {
        width: 126,
        height: 126,
        borderRadius: 6,
    },
    rightSide: {
        textAlign: 'right',
        alignItems: 'flex-end',
        width: "60%",
        justifyContent: 'space-around'
    },
    textWrap: {
        textAlign: 'right',
        alignItems: 'flex-end',
        width: "96%"
    },
    name: {
        fontSize: 17,
        color: Colors.activeColor,
        fontFamily: "Rosarivo",
        width: '90%',
        textAlign: 'right',
        lineHeight: 24,
    },
    categories: {
        marginTop: 2,
        fontSize: 12,
        color: '#FFF',
        fontFamily: "Rosarivo",
        textAlign: 'right',
        marginBottom: 6,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
        gap: 30,
    },
    price: {
        color: "#FFF",
        fontWeight: 200,

    },
    quantity: {
        paddingVertical: 2,
        paddingHorizontal: 14,
        backgroundColor: Colors.activeColor,
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 200,
        color: Colors.brownColor
    },
    quantityText: {

    },
    note: {
        marginTop: 10,
        fontSize: 10,
        fontWeight: 200,
        color: "#FFF"
    }
})
