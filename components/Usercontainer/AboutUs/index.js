import React, { useContext, useCallback, useEffect } from "react";
import styles from "./styles";
import Input from "../../UI/Button/Input";
import { AuthContext } from "../../../Context/AuthProvider";
import BackButton from "../../UI/DetailItem/BackButton";
import { View, Text, Image } from "react-native";
export default function AboutUsScreen({ navigation }) {
    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])

    useEffect(() => {
        navigation.setOptions({

            headerLeft: () => (
                <BackButton goBackFunc={backToPrevPage} />
            ),
        })
    }, [])
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/img/logo.jpg')}
            />
            <View style={styles.firstWrap}>
                <Text style={styles.titleContainer}>App Version 5.0.2</Text>
                <Text style={styles.txtContainer}>Licensed by:</Text>
            </View>
            <View style={styles.secondWrap} >
                <Text style={styles.txtContainer}>TWO Joint Stock Company</Text>
                <Text style={styles.txtContainer}>A2-00.04 Sarimi Apartment</Text>
                <Text style={styles.txtContainer}>74 Nguyen Co Thach, An Loi Dong Ward, Ho Chi Minh City</Text>
            </View>
            <Image
                style={styles.bluecheck}
                source={require('../../../assets/img/bluecheck.png')}
            />
        </View>
    )

}
