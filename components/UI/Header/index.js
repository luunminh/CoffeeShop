import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import UserAvatar from 'react-native-user-avatar-component'
import Colors from '../../Colors'
function Header({ navigation, user, reloadFunc }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftSide}
                onPress={() => reloadFunc(prev => !prev)}
            >
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
export default React.memo(Header)

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
