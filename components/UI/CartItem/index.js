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
                    {/* <Image
                        style={styles.itemImg}
                        source={{ uri: `https://firebasestorage.googleapis.com/v0/b/coffeeshop-c0145.appspot.com/o/img%2Fcoffee%2Fcf%2Famericano.png?alt=media&token=10c5a5fe-7c8a-4af8-8b78-7c5ed47fd684` }}
                    /> */}
                    <View style={styles.infoWrap}>
                        <Text style={styles.itemName}>Bursting Blueberry</Text>
                        <Text style={styles.itemCategory}>Milktea</Text>
                        <View style={styles.quantityWrap}>
                            <TouchableOpacity style={styles.btnWrap}
                                onPress={() => setQuantity((prev) => {
                                    if (prev >= 2) {
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
                </View>
                <View style={styles.rightSide}>
                    <Text style={styles.itemPrice}>25.000</Text>
                    <TouchableOpacity style={styles.delBtn}>
                        <Image style={styles.delIcon}
                            source={require('../../../assets/img/delete.png')}
                        />
                    </TouchableOpacity>
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
        height: 110,
        width: '100%',
        backgroundColor: Colors.itemPriceColor,
        paddingHorizontal: 28,
        paddingVertical: 15,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-start'
    },
    leftSide: {
        flexDirection: "row",
        gap: 10,
        alignItems: 'center'
    },
    itemImg: {
        width: 72,
        height: 72,
        borderRadius: 15,
    },
    infoWrap: {
        // justifyContent: "space-between",
        // height: 69,
        gap: 6,

    },
    itemName: {
        color: '#FFF',
        // fontFamily: "Rosarivo",
        fontSize: 16,
        lineHeight: 22,
        // maxWidth: 180,
        fontWeight: 700

    },
    itemCategory: {
        color: Colors.activeColor,
        fontSize: 14,
        fontFamily: "Rosarivo",
        lineHeight: 16,
    },
    itemPrice: {
        color: '#FFF',
        fontSize: 17,
        // fontFamily: "Rosarivo",
        // lineHeight: 20,
        fontWeight: 300,
    },
    rightSide: {
        justifyContent: 'space-between',
        marginTop: 2,
        paddingBottom: 4,
        height: '100%',
        alignItems: 'center'
    },
    quantityWrap: {
        width: 96,
        height: 28,
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
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 600,
        // fontFamily: "Rosarivo",
        color: '#FFF',
    },
    delBtn: {
        backgroundColor: Colors.redColor,
        height: 28,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }, delIcon: {
        width: 13,
        height: 14,
    }
})
