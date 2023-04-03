import React, { useContext, useMemo } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles'
import CartItem from '../../UI/CartItem'
import ActiveButton from '../../UI/Button/ActiveButton'
import { AppContext } from '../../../Context/AppProvider'
export default function CartScreen({ navigator }) {
    const { cartList, setCartList } = useContext(AppContext)
    const total = useMemo(() => {
        const rs = cartList.reduce((acc, cur) => {
            return acc + cur.price * cur.quantity
        }, 0)
        return rs
    }, [cartList])

    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Cart</Text>
            </View>
            <View style={styles.listWrap}>
                <ScrollView>
                    <View style={styles.itemContainer}>
                        {cartList.length > 0 ? (cartList.map((item, index) =>
                        (
                            <CartItem key={index} item={item} />
                        )
                        )) : (
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>The cart is empty</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.priceInfo}>
                <ActiveButton text='Change your address' />
                <View style={styles.priceContainer}>
                    <View style={styles.priceWrap}>
                        <Text style={styles.label}>Item cost</Text>
                        <Text style={styles.price}>{`${new Intl.NumberFormat('en-US').format(total)} vnđ`}</Text>
                    </View>
                    <View style={styles.priceWrap}>
                        <Text style={styles.label}>Shipping fee</Text>
                        <Text style={styles.price}>{`${total === 0 ? 0 : `20.000`}vnđ`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.payContainer}>
                <View style={styles.totalWrap}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalPrice}>{`${total === 0 ? 0 : new Intl.NumberFormat('en-US').format(total + 20000)} VNĐ`}</Text>
                </View>
                <ActiveButton text='Pay now' />

            </View>
        </View>
    )
}
