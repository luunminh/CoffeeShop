import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles'
import CartItem from '../../UI/CartItem'
import ActiveButton from '../../UI/Button/ActiveButton'

export default function CartScreen({ navigator }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Cart</Text>
            </View>
            <View style={styles.listWrap}>
                <ScrollView>
                    <View style={styles.itemContainer}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.priceInfo}>
                <ActiveButton text='Change your address' />
                <View style={styles.priceContainer}>
                    <View style={styles.priceWrap}>
                        <Text style={styles.label}>Item cost</Text>
                        <Text style={styles.price}>200.000 vnđ</Text>
                    </View>
                    <View style={styles.priceWrap}>
                        <Text style={styles.label}>Shipping fee</Text>
                        <Text style={styles.price}>20.000 vnđ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.payContainer}>
                <View style={styles.totalWrap}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalPrice}>250.000 VNĐ</Text>
                </View>
                <ActiveButton text='Pay now' />

            </View>
        </View>
    )
}
