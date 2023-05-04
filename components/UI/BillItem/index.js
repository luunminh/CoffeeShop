import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../Colors'
import { formatRelative } from 'date-fns/esm';
import { db } from '../../../firebase/config';
import { AppContext } from '../../../Context/AppProvider';
export default function BillItem({ item }) {
    const [total, setTotal] = useState(0)
    const [itemList, setItemList] = useState([])
    const { coffeeList } = useContext(AppContext)
    useEffect(() => {
        let collectionRef = db.collection('bill_detail')
        collectionRef = collectionRef.where(
            'billId',
            '==',
            item.id
        );
        const unsubscribe = collectionRef.onSnapshot((snapshot) => {
            const newDocs = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            const newData = newDocs.map((item, index) => {
                let coffeeItem = coffeeList.find((coffee) => {
                    return coffee.id === item.coffeeId
                })
                return {
                    ...coffeeItem,
                    coffeeId: coffeeItem.id,
                    id: item.id,
                    quantity: item.quantity,
                    billId: item.billId
                }
            })
            setItemList(newData)
            let rs = newData.length > 0 ? (newData.reduce((acc, cur) => {
                return acc + cur.price * cur.quantity
            }, 0)) : 0
            setTotal(rs)
            return
        });
        return unsubscribe
    }, [item])
    function formatDate(seconds) {
        let formattedDate = '';

        if (seconds) {
            formattedDate = formatRelative(new Date(seconds * 1000), new Date());

            formattedDate =
                formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        }

        return formattedDate;
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemWrap}>
                <Text style={styles.label}>Bill ID</Text>
                <Text style={styles.content}>{item.id}</Text>
            </View>
            <View style={styles.itemWrap}>
                <Text style={styles.label}>Status</Text>
                <Text style={styles.content}>{item.isPaid ? 'Paid' : 'Unpaid'}</Text>
            </View>
            <View style={styles.itemWrap}>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.content}>{(item.time) ? formatDate(item.time.seconds) : ("")}</Text>
            </View>
            <View style={styles.priceWrap}>
                <Text style={styles.price}>{`${new Intl.NumberFormat('en-US').format(total)} vnđ`}</Text>
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
