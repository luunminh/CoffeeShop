import React, { useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Colors from '../../Colors'
import ActiveButton from '../Button/ActiveButton'
import BackButton from './BackButton'
export default function DetailItem({ route, navigation }) {
    const { elm } = route.params

    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])
    useEffect(() => {
        navigation.setOptions({
            // headerTransparent: true,
            // headerStyle: {}
            headerLeft: () => (
                <BackButton goBackFunc={backToPrevPage} />
            )
        })
    }, [])
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
        alignItems: "center",
        paddingTop: 0,
    },
    itemImg: {
        width: "98%",
        height: 411,
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
        width: "95%",
        maxHeight: 80
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
