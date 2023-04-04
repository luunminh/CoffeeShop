import React, { useContext, useCallback, useEffect } from "react";
import styles from "./styles";
import Input from "../../UI/Button/Input";
import { AuthContext } from "../../../Context/AuthProvider";
import Colors from "../../Colors";
import BackButton from "../../UI/DetailItem/BackButton";

import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, BackHandler } from "react-native";
export default function UserInfoScreen({ navigation }) {


    const backToPrevPage = useCallback(() => {
        navigation.goBack()
    }, [navigation])


    useEffect(() => {
        navigation.setOptions({

            headerLeft: () => (
                <BackButton goBackFunc={backToPrevPage} />
            ),
            headerRight: () => (
                <Text style={styles.btnSave}>Save</Text>
            )
        })
    }, [])
    const { user } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View style={styles.inputWrap}>
                <Text style={styles.titleLabel}>User Name</Text>
                <Input
                    valueState={user.displayName}
                    style={styles.inputText}
                    placeholder="Enter your name"
                    // setState={setName}
                    // setErrState={setErrName}
                    inputType={"input"}

                />
                <Text style={styles.titleLabel}>Phone Number</Text>
                <Input
                    valueState={user.phoneNumber}
                    style={styles.phoneNumber}
                    placeholder="Enter your phone number"
                    // setState={setPhone}
                    // setErrState={setErrPhone}
                    inputType={"phone"}

                />
                <Text style={styles.titleLabel}>Email</Text>
                <Input
                    valueState={user.uid}
                    style={styles.inputText}
                    placeholder="Enter your email"
                    // setState={setEmail}
                    // setErrState={setErrEmail}
                    inputType={"email"}

                />
                {/* <Text style={styles.titleLabel}>User Name</Text>
                    <Input
                        style={styles.inputText}
                        placeholder="Enter your birthday"
                        // setState={setPhone}
                        // setErrState={setErrPhone}
                        inputType={"birthday"}

                    /> */}
                <Text style={styles.titleLabel}>Address</Text>
                <Input
                    line={3}
                    txtAlign='top'
                    style={styles.inputText}
                    placeholder="Enter your address"
                    // setState={setPhone}
                    // setErrState={setErrPhone}
                    inputType={"address"}

                />
                <Text style={styles.titleLabel}>Password</Text>
                <Input
                    style={styles.inputText}
                    placeholder="Enter your new password"
                    // setState={setPhone}
                    // setErrState={setErrPhone}
                    inputType={"password"}

                />
            </View>
        </View>
    )
}