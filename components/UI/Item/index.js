import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Colors from '../../Colors'
export default function Item({ navigation }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.itemImg}
                source={{uri:'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/309852616_640043134139736_5004160122942840101_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LggX_KaFwcMAX9rwzY2&_nc_ht=scontent.fdad3-1.fna&oh=00_AfC3n39nIK9c2aAaxOGXLtCAU6QLpygggdre8TkpeaVKMg&oe=641AEF53'}}
            />
            <View style={styles.itemNameWrap}>
                <Text style={styles.itemName}>Drizzled with Caramel</Text>
            </View>
            <View style={styles.priceWrap}>
                <View style={styles.priceLeftSide}>
                    <Text style={styles.text}>29.000</Text>
                </View>
                <TouchableOpacity style={styles.priceRightSide}>
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
        fontSize: 15,
        width: "80%",
        fontFamily: "Rosarivo"
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

