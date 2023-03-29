import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import UserAvatar from 'react-native-user-avatar-component'
import Colors from '../../Colors'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
function Header({ navigation, user, reloadFunc}) {
    const handleUserAvatarClick = () => {
        navigation.navigate('UserContainer');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftSide}
                onPress={() => {
                    reloadFunc(prev => !prev)
                    Toast.show({
                        type: 'success',
                        text1: "Reload your data",
                        // text2: "There are some errors while processing !!!",
                        autoHide: 'true',
                        visibilityTime: 1000

                    })
                }}
            >
                <Image
                    style={styles.nameLogo}
                    source={require('../../../assets/img/nameLogo.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSide} onPress={handleUserAvatarClick}>
                <UserAvatar size="48" color={Colors.textColor} name={`${(user) ? user.photoURL : 'Son Hoang'}`} src={`${(user) ? user.photoURL : ''}`} />
            </TouchableOpacity>
            <Toast />
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
