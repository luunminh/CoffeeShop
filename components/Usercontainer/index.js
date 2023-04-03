import React, { useContext, useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, BackHandler } from "react-native";
import Colors from "../Colors";
import UserInfoScreen from "./UserInfo";
import BillHistoryScreen from "./BillHistory";
import AboutUsScreen from "./AboutUs";
import ContactScreen from "./Contact";
import TermOfUseScreen from "./TermOfUse";
import styles from "./styles.js";
import UserHeader from "../UI/UserHeader";
import { AppContext } from '../../Context/AppProvider'
import { useFocusEffect } from "@react-navigation/native";
import ActiveButton from '../UI/Button/ActiveButton'
import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
import { signOut } from 'firebase/auth'
export default function UserContainer({ navigation }) {
    const { setUser } = useContext(AuthContext)
    const { setIsReload, setCartList, setCart } = useContext(AppContext)

    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])




    const transToLoginScreen = useCallback(() => {
        signOut(auth).then(() => {
            setCartList([])
            setCart('')
            navigation.navigate('LoginScreen')
        }).catch(error => {
            console.log(error)
            alert(error)
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <UserHeader navigator={navigator} user={undefined} reloadFunc={setIsReload} goBackFunc={backToPrevPage} />
            </View>
            <View style={styles.secondContainer}>
                <ScrollView>
                    <View style={styles.rowWrapper}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate("UserInfo")}>
                                <Text style={styles.rowTitle}>Account Settings</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.rowWrapper}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate("BillHistory")}>
                                <Text style={styles.rowTitle}>Bill History</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.rowWrapper}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
                                <Text style={styles.rowTitle}>About Us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.rowWrapper}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                                <Text style={styles.rowTitle}>Contact</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.rowWrapper}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate("TermOfUse")}>
                                <Text style={styles.rowTitle}>Term Of Use</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
            <ActiveButton text='Sign out' tranScreen={transToLoginScreen} />
        </View>
    );
}