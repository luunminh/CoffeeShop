import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, BackHandler } from 'react-native'
import UserAvatar from 'react-native-user-avatar-component'
import Colors from '../../Colors'
import * as ImagePicker from 'expo-image-picker'
import { AuthContext } from '../../../Context/AuthProvider'
import { db } from '../../../firebase/config'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


export default function UserHeader({ navigation, goBackFunc, reloadFunc }) {
    const { user, setUser } = useContext(AuthContext);

    const [image, setImage] = useState('');
    const [uploading, setUploading] = useState(false);


    const uploadImage = async (uri, name) => {
        const storage = getStorage();
        const storageRef = ref(storage, `${name}`);
        const response = await fetch(uri);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    };

    const updateProFile = async (image) => {

        await db.collection('users').where('uid', '==', user.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(documentSnapshot => {
                    documentSnapshot.ref.update({
                        photoURL: image
                    }).then(() => {
                        console.log('User updated!');
                    });
                });
            });
    }


    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setUploading(true);
            const downloadURL = await uploadImage(result.assets[0].uri, user.uid);
            setImage(downloadURL);

            updateProFile(downloadURL);
            setUser(() => {
                return { ...user, photoURL: downloadURL }
            })
            setUploading(false);
        }
    }




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
            <View style={styles.userWrap}>
                <TouchableOpacity style={styles.leftSide}>
                    <View style={styles.avaBorder}>
                        <UserAvatar size="88" color={Colors.textColor} name={`${(user.photoURL) ? user.photoURL : user.displayName}`} src={`${(user.photoURL) ? user.photoURL : ''}`} />
                    </View>
                </TouchableOpacity>
                <View style={styles.rightSide} >
                    <Text style={styles.titlesSubtitle}>{user.displayName}</Text>
                    <TouchableOpacity onPress={pickImage}>
                        <Text style={styles.titlesTitle}>Change avatar</Text>
                    </TouchableOpacity>
                </View>
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
    userWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15,
    },
    leftSide:
    {

        marginTop: 50,
    },
    avaBorder: {
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
        backgroundColor: Colors.activeColor,
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
