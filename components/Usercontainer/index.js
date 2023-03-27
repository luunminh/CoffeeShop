import React,{useContext,useCallback} from "react";
import { View, Text, TouchableOpacity,ScrollView ,Image, StyleSheet, BackHandler } from "react-native";
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

export default function UserContainer({ navigation}) {
    const {setIsReload}=useContext(AppContext)

    useFocusEffect(
        React.useCallback(()=>{
            const onBackPress =()=>{
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
        },[]),
    );


    const transToLoginScreen = useCallback(() => {
        navigation.navigate('LoginScreen')
    }, [navigation])

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
            <View style={styles.backContainer}>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    >
                    <Image
                         style={styles.backIcon}
                        source={require('../../assets/img/back.png')}
                    />
                    </TouchableOpacity>
                </View>
                <UserHeader navigator={navigator} user={undefined} reloadFunc={setIsReload} />
            </View>
            <View style={styles.secondContainer}>
                <ScrollView>
                <View style={styles.rowWrapper}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate("UserInfo")}>
                            <Text style={styles.rowTitle}>Cài đặt tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rowWrapper}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate("BillHistory")}>
                            <Text style={styles.rowTitle}>Lịch sử đơn hàng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rowWrapper}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
                            <Text style={styles.rowTitle}>Về chúng tôi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rowWrapper}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                            <Text style={styles.rowTitle}>Liên hệ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rowWrapper}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate("TermOfUse")}>
                            <Text style={styles.rowTitle}>Điều khoản sử dụng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                
            </View>
            <ActiveButton text='Đăng xuất' tranScreen={transToLoginScreen} />
        </View>
    );
}
