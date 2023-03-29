import React, { useContext, useEffect, useRef, useState , useMemo} from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../UI/Header'
import Input from '../../UI/Button/Input'
import Item from '../../UI/Item'
import { AppContext } from '../../../Context/AppProvider'
import SideBar from '../../UI/SideBar'

export default function FavouriteScreen({ navigation }) {

    const { coffeeList, setCoffeeList, isReload,
        setIsReload, favouriteList, setIsFavouriteList } = useContext(AppContext)
    const [searchInput, setSearchInput] = useState('')
    const [coffeeSearchList, setCoffeeSearchList] = useState(coffeeList)
    const favList = useMemo(() => {
        const rs = favouriteList.map((item) => item.coffeeId)
        return rs
    }, [favouriteList])
    useEffect(() => {
        setCoffeeSearchList(() => {
            let rs = coffeeList.filter((item) => {
                return (item.name.toLowerCase().includes(searchInput.trim().toLowerCase()) && favList.includes(item.id))
            })
            return rs;
        })

    }, [searchInput, coffeeList, favouriteList])

    useEffect(() => {
        if (searchInput.trim().length > 0) {
            setSearchInput('');
        }
    }, [isReload])


    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Header navigation={navigation} reloadFunc={setIsReload} />
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
                                        <Text style={styles.errorText}>{`We couldn't find a coffee ${searchInput}`}</Text>
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
