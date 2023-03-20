import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../UI/Header'
import Input from '../../UI/Button/Input'
import Item from '../../UI/Item'
import { AppContext } from '../../../Context/AppProvider'
import { Colors } from 'react-native/Libraries/NewAppScreen'
export default function HomeScreen({ navigation }) {

    const { coffeeList, setCoffeeList, isReload, setIsReload } = useContext(AppContext)
    const [searchInput, setSearchInput] = useState('')
    const [coffeeSearchList, setCoffeeSearchList] = useState(coffeeList)
    useEffect(() => {
        setCoffeeSearchList(() => {
            const rs = coffeeList.filter((item) => {
                return item.name.toLowerCase().includes(searchInput.trim().toLowerCase())
            })
            return rs;
        })

    }, [searchInput])

    useEffect(() => {
        if (searchInput.trim().length > 0) {
            setSearchInput('');
        }
    }, [isReload])


    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Header navigator={navigator} user={undefined} reloadFunc={setIsReload} />
                <View style={styles.searchWrap}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../../../assets/img/search.png')}
                    />
                    <Input
                        style={styles.inputText}
                        placeholder="Search Coffee...."
                        setState={setSearchInput}
                        valueState={searchInput}
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
                <View style={styles.rightSide}>
                    <ScrollView style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.listItem}>
                            {coffeeSearchList.length > 0 ?
                                (coffeeSearchList.map((elm, index) => (
                                    <Item navigation={navigation} elm={elm} key={index} />
                                ))) :
                                (
                                    <View style={styles.errorContainer}>
                                        <Text style={styles.errorText}>{`We couldn't find coffee name "${searchInput}"`}</Text>
                                    </View>
                                )
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
