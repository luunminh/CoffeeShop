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
import { linkWithPhoneNumber, reset } from "firebase/auth";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

export default function UserContainer({ navigation }) {
    const { setIsReload } = useContext(AppContext)


    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('HomeScreen');
                return true;
            };
            BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );
            return () => {
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress
                );
            };
        }, []),
    );

    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])




    return (

        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <UserHeader navigator={navigator} goBackFunc={backToPrevPage} />
            </View>
            <View style={styles.secondContainer}>
                <ScrollView>
                    <View style={styles.rowWrapper}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate("UserInfoScreen")} >
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
            <ActiveButton text='Sign out' />
        </View>
    );
}