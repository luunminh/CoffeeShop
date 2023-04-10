import React, { useContext, useCallback, useEffect } from "react";
import styles from "./styles";
import BackButton from "../../UI/DetailItem/BackButton";
import { View, Text, Image, ScrollView } from "react-native";
export default function ContactScreen({ navigation }) {
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

    return(

        <View style={styles.container}>
        <ScrollView>
            <View style={styles.rowWrapper}>
                <View style={styles.row}>
                    <Image
                        style={styles.backIcon}
                        source={require('../../../assets/img/telephone.png')}
                    />
                    <View style={styles.rightSide}>
                        <Text style={styles.rowTitle}>Call Center</Text>
                        <Text style={styles.detailTitle}>05435495743</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rowWrapper}>
                <View style={styles.row}>
                    <Image
                        style={styles.backIcon}
                        source={require('../../../assets/img/email.png')}
                    />
                    <View style={styles.rightSide}>
                        <Text style={styles.rowTitle}>Email</Text>
                        <Text style={styles.detailTitle}>nhamen291002@gmail.com</Text>
                    </View>
                </View>
            </View>
                <View style={styles.rowWrapper}>
                    <View style={styles.row}>
                        <Image
                            style={styles.backIcon}
                            source={require('../../../assets/img/earthglobe.png')}
                        />
                        <View style={styles.rightSide}>
                            <Text style={styles.rowTitle}>Website</Text>
                            <Text style={styles.detailTitle}>www.nhamencoffee.com</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rowWrapper}>
                    <View style={styles.row}>
                        <Image
                            style={styles.backIcon}
                            source={require('../../../assets/img/email.png')}
                        />
                        <View style={styles.rightSide}>
                            <Text style={styles.rowTitle}>Facebook</Text>
                            <Text style={styles.detailTitle}>facebook.com/Nha.Men.Coffee.2023</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
