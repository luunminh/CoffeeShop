import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Colors from '../../Colors'
import ActiveButton from '../Button/ActiveButton'
export default function DetailItem({ route }) {
    const { elm } = route.params

    return (
        <View style={styles.container}>
            <Image
                style={styles.itemImg}
                source={{ uri: `${elm.image}` }}
            />
            <View style={styles.nameWrap}>
                <Text style={styles.itemName}>{elm.name}</Text>
                <TouchableOpacity style={styles.favouriteWrap}>

                </TouchableOpacity>
            </View>
            <View style={styles.descWrap}>
                <Text style={styles.itemDesc}>{elm.description}</Text>
            </View>
            <View style={styles.priceWrap}>
                <Text style={styles.priceTitle}>Price</Text>
                <Text style={styles.itemPrice}>{`${new Intl.NumberFormat('en-US').format(elm.price)} VNĐ`}</Text>
            </View>
            <ActiveButton text='BUY NOW' />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        padding: 16,
        alignItems: "center"
    },
    itemImg: {
        width: "98%",
        height: 400,
        borderRadius: 40,
        marginBottom: 18,
    },
    nameWrap: {
        width: "95%",
        flexDirection: "row",
        marginBottom: 8,
        justifyContent: "flex-start",
    },
    itemName: {
        fontSize: 24,
        fontFamily: "Rosarivo",
        // lineHeight: 30,
        color: "#FFF",
    },
    descWrap: {
        width: "95%"
    },
    itemDesc: {
        fontSize: 14,
        color: "#FFF",
        fontFamily: "Rosarivo",
        lineHeight: 20,
        textAlign: 'left',
    }
    , priceWrap: {
        width: "95%",
        marginTop: 20,
        marginBottom: 30,
        gap: 12,
        alignItems: "flex-start",
    },
    priceTitle: {
        fontSize: 25,
        fontFamily: "Rosarivo",
        color: "#FFF",

    },
    itemPrice: {
        color: "#D2AF84",
        fontWeight: 700,
        fontSize: 26,
        lineHeight: 27,

    }

})
