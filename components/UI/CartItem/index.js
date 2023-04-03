import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import Colors from '../../Colors'
export default function CartItem({ item }) {
    const [quantity, setQuantity] = useState(0)
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemWrap}>
                <View style={styles.leftSide}>
                    <Image
                        style={styles.itemImg}
                        source={{ uri: `https://firebasestorage.googleapis.com/v0/b/coffeeshop-c0145.appspot.com/o/img%2Fcoffee%2Fcf%2Famericano.png?alt=media&token=10c5a5fe-7c8a-4af8-8b78-7c5ed47fd684` }}
                    />
                    <View style={styles.infoWrap}>
                        <Text style={styles.itemName}>Bursting Blueberry</Text>
                        <Text style={styles.itemPrice}>25.000 vnđ</Text>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <View style={styles.quantityWrap}>
                        <TouchableOpacity style={styles.btnWrap}
                            onPress={() => setQuantity((prev) => {
                                if (prev > 0) {
                                    return prev - 1
                                } else return 0
                            })}
                        >
                            <Image
                                source={require('../../../assets/img/subtract.png')}
                                style={styles.icon}
                            />

                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity style={styles.btnWrap}
                            onPress={() => setQuantity((prev) => prev + 1)}
                        >
                            <Image
                                source={require('../../../assets/img/add.png')}
                                style={styles.icon}
                            />

                        </TouchableOpacity>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        width: "100%",
    },
    itemWrap: {
        height: 96,
        width: '100%',
        backgroundColor: Colors.itemPriceColor,
        padding: 13,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftSide: {
        flexDirection: "row",
        gap: 12,
        alignItems: 'center'
    },
    itemImg: {
        width: 72,
        height: 72,
        borderRadius: 15,
    },
    infoWrap: {
        justifyContent: "space-between",
        height: 69,
    },
    itemName: {
        color: '#FFF',
        fontFamily: "Rosarivo",
        fontSize: 15,
        lineHeight: 20,
        maxWidth: 100,

    },
    itemPrice: {
        color: Colors.activeColor,
        fontSize: 18,
        fontFamily: "Rosarivo",
        lineHeight: 20,
    },
    rightSide: {
        justifyContent: 'center'
    },
    quantityWrap: {
        width: 87,
        height: 30,
        borderRadius: 8,
        backgroundColor: "#463D46",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnWrap: {
        borderRadius: 8,
        width: 30,
        height: 30,
        backgroundColor: Colors.activeColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantity: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        lineHeight: 32,
        fontFamily: "Rosarivo",
        color: '#FFF'
    }
})
