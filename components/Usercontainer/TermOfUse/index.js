import React, { useContext, useCallback, useEffect } from "react";
import styles from "./styles";
import BackButton from "../../UI/DetailItem/BackButton";
import { View, Text, Image, ScrollView } from "react-native";
export default function TermOfUseScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.firstWrap}>
                <Text style={styles.titleName}>Term Of Use</Text>
                <Text style={styles.txtUpdate}>Last updated on 01/04/2023</Text>
            </View>
            <ScrollView style={styles.scrollcontainer}
            >
                <View style={styles.secondWrap}>
                    <Text style={styles.headerName}>1. Terms</Text>
                    <Text style={styles.txtName}>This section should outline the specific terms and conditions that users of the Coffee App must agree to in order to use the platform. This could include restrictions on sharing or reselling content, guidelines for appropriate behavior, and any other rules that users must adhere to in order to use the app.</Text>
                    <Text style={styles.headerName}>2. Use License</Text>
                    <Text style={styles.txtName}>This section should explain the rights and permissions that the Coffee App grants to its users. For example, users may be granted a limited, non-exclusive license to use the app's features and content, subject to certain restrictions. This section should also outline any limitations on users' rights, such as restrictions on copying, modifying, or distributing the app's content.</Text>
                    <Text style={styles.headerName}>3. Modifications and Updates</Text>
                    <Text style={styles.txtName}>This section should explain how the Coffee App may be modified or updated over time. For example, the app may release new features or functionality, or may need to make changes to comply with legal requirements. Users should be informed that the app may make changes at any time, and that continued use of the app constitutes acceptance of these changes.</Text>
                </View>
            </ScrollView>
        </View>
    )

}


