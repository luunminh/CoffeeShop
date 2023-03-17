import React from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../UI/Header'
import Input from '../../UI/Button/Input'
export default function HomeScreen({ navigator }) {
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
                        placeholder="Search Coffee...."
                    // setState={setEmail}
                    // setErrState={setErrEmail}
                    // inputType={"email"}
                    />
                </View>
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.sideMenu}>
                    <ScrollView style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.typeList}>
                            <TouchableOpacity style={styles.typeItem}>
                                <Text style={styles.typeItemText}>Capuchino</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.typeItem}>
                                <Text style={styles.typeItemText}>Latte</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.typeItem}>
                                <Text style={styles.typeItemText}>Freeze</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.typeItem}>
                                <Text style={styles.typeItemText}>Tea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.typeItem}>
                                <Text style={styles.typeItemText}>MilkTea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.typeItem}>
                                <Text style={styles.typeItemText}>Coffee</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.typeItem}>
                                <Text style={styles.typeItemText}>Coffee</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.listItem}>

                </View>
            </View>
        </View>
    )
}
