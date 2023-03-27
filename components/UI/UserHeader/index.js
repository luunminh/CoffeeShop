import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import UserAvatar from 'react-native-user-avatar-component'
import Colors from '../../Colors'
export default function UserHeader({ navigator, user }) {
    return (
    <View style ={styles.container}>
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
        paddingHorizontal:20,
        paddingTop:40,
        width: "100%",
        position: 'relative'
    },
    leftSide:
    {
        paddingLeft:3,
        marginTop:50,
        paddingHorizontal:15,
    },
    rightSide: {
        paddingRight:50,
        marginTop:40,
        paddingHorizontal:20,
    },
    titlesTitle:{
        
        fontFamily:'Rosarivo',
        fontSize:15,
        color: '#FFFFFF'
    },
    titlesSubtitle:{
        marginBottom: 5 ,
        fontFamily:'Rosarivo',
        fontSize:25,
        color: '#EFE3C8'
        
    }
})