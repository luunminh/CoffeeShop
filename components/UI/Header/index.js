import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import UserAvatar from 'react-native-user-avatar-component'
import Colors from '../../Colors'
export default function Header({ navigator, user }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftSide}>
                <Image
                    style={styles.nameLogo}
                    source={require('../../../assets/img/nameLogo.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSide}>
                <UserAvatar size="48" color={Colors.textColor} name={`${(user) ? user.photoURL : 'Son Hoang'}`} src={`${(user) ? user.photoURL : ''}`} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "100%",
    },
    rightSide: {
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
        backgroundColor: Colors.activeColor,
    }
})
