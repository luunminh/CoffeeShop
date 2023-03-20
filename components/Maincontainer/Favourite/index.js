import React from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../UI/Header'
import Input from '../../UI/Button/Input'
import Item from '../../UI/Item'
export default function FavouriteScreen({ navigator }) {
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Header navigator={navigator} user={undefined} />
                <View style={styles.searchWrap}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../../../assets/img/search.png')}
                    />
                    <Input
                        style={styles.inputText}
                        placeholder="Search Favourite Coffee...."
                    // setState={setEmail}
                    // setErrState={setErrEmail}
                    // inputType={"email"}
                    />
                </View>
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.rightSide}>
                    <ScrollView style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.listItem}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
