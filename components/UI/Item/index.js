import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Colors from '../../Colors'
import { AppContext } from '../../../Context/AppProvider'
export default function Item({ navigation, elm, toastFunc }) {
    const { cartList, setCartList } = useContext(AppContext)
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => {
                navigation.navigate("DetailItem", { elm })
            }}
        >
            <Image
                style={styles.itemImg}
                source={{ uri: `${elm.image}` }}
            />
            <View style={styles.itemNameWrap}>
                <Text style={styles.itemName}>{elm.name}</Text>
            </View>
            <View style={styles.priceWrap}>
                <View style={styles.priceLeftSide}>
                    <Text style={styles.text}>{`${new Intl.NumberFormat('en-US').format(elm.price)} `}</Text>
                </View>
                <TouchableOpacity style={styles.priceRightSide}
                    onPress={() => {
                        setCartList(() => {
                            let rs = []
                            if (cartList.find(item => elm.id === item.coffeeId) !== undefined) {
                                rs = cartList.map((item => {
                                    if (item.coffeeId === elm.id) {
                                        item = { ...item, quantity: item.quantity + 1 }
                                    }
                                    return item
                                }))
                            } else {
                                rs = [...cartList, {
                                    ...elm,
                                    coffeeId: elm.id,
                                    quantity: 1,
                                    billId: cartList[0].billId
                                    //id
                                }]
                            }
                            toastFunc()
                            return rs
                        })
                    }}
                >
                    <Image
                        style={styles.iconImg}
                        source={require('../../../assets/img/add.png')}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "43%",
        padding: 14,
        borderRadius: 12.61,
        backgroundColor: Colors.itemPriceColor,
        alignItems: "center",
        minWidth: 135,

    },
    itemImg: {
        width: 120,
        height: 120,
        borderRadius: 12.61,
    },
    itemNameWrap: {
        marginTop: 12,
        width: "100%",
    },
    itemName: {
        color: "#FFF",
        lineHeight: 20,
        fontSize: 16,
        width: "80%",
        fontFamily: "Rosarivo",
        height: 40,
    },
    priceWrap: {
        marginTop: 11,
        backgroundColor: "#463D46",
        flexDirection: "row",
        width: "100%",
        height: 39,
        alignItems: "center",
        borderRadius: 12,
        justifyContent: "space-between",
        overflow: "hidden"
    },
    priceLeftSide: {
        width: "70%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 6,
    },
    priceRightSide: {
        width: "30%",
        height: "100%",
        backgroundColor: Colors.activeColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
    },
    text: {
        color: "#FFF",
        fontWeight: 700,
    }

})

