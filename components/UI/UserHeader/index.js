import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, BackHandler } from 'react-native'
import UserAvatar from 'react-native-user-avatar-component'
import Colors from '../../Colors'

//import { useFocusEffect } from "@react-navigation/native";

export default function UserHeader({ navigation, navigator, user, goBackFunc, reloadFunc }) {

    // useFocusEffect(
    //     React.useCallback(() => {
    //         const onBackPress = () => {
    //             navigation.navigate('HomeScreen');
    //             return true;
    //         };
    //         BackHandler.addEventListener(
    //             'hardwareBackPress',
    //             onBackPress
    //         );
    //         return () => {
    //             BackHandler.removeEventListener(
    //                 'hardwareBackPress',
    //                 onBackPress
    //             );
    //         };
    //     }, []),
    // );
    return (
        <View style={styles.container}>
            <View style={styles.backContainer}>
                <TouchableOpacity
                    onPress={goBackFunc}
                >
                    <Image
                        style={styles.backIcon}
                        source={require('../../../assets/img/back.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.leftSide}>
                <UserAvatar size="85" color={Colors.textColor} name={`${(user) ? user.photoURL : 'Son Hoang'}`} src={`${(user) ? user.photoURL : ''}`} />
            </TouchableOpacity>
            <View style={styles.rightSide} >
                <Text style={styles.titlesSubtitle}>Ngô Văn Toàn</Text>
                <Text style={styles.titlesTitle}>Đổi avatar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingTop: 40,
        width: "100%",
        position: 'relative'
    },
    leftSide:
    {
        // backgroundColor: 'red',
        // paddingLeft: 3,
        marginTop: 50,
        // paddingHorizontal: 15,
    },
    rightSide: {
        // paddingRight: 50,
        marginTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    titlesTitle: {

        fontFamily: 'Rosarivo',
        fontSize: 15,
        color: '#FFFFFF'
    },
    titlesSubtitle: {
        marginBottom: 5,
        fontFamily: 'Rosarivo',
        fontSize: 25,
        color: '#EFE3C8'

    },
    backContainer: {
        height: 40,
        width: 40,
        position: 'absolute',
        borderRadius: 99,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 0,
        top: 28,
        paddingLeft: -5,
    },
    backIcon: {
        width: 18,
        height: 18,
        width: -5,
        resizeMode: 'contain',
    },
})