import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Colors'
import HomeScreen from './Home';
import CartScreen from './Cart';
import FavouriteScreen from './Favourite';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
export default function MainContainer({ navigation }) {
    const homeName = 'home'
    const cartName = 'cart'
    const favourName = 'favourite'


    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;


                    if (rn === homeName) {
                        iconName = 'md-home-sharp'
                    } else if (rn === cartName) {
                        iconName = 'cart'
                    } else {
                        iconName = 'heart'
                    }


                    return <Ionicons name={iconName} size={30} color={color} />
                },
                tabBarStyle: {
                    height: 90,
                    paddingTop: 10,
                    backgroundColor: Colors.bottomNavigationColor,
                    alignItems: "center",
                    borderTopColor: "transparent"
                },
                headerShown: false,
            })
            }
            tabBarOptions={
                {
                    showLabel: false,
                    activeTintColor: Colors.activeColor,
                    inactiveTintColor: Colors.textColor,
                }}
        >
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={cartName} component={CartScreen} />
            <Tab.Screen name={favourName} component={FavouriteScreen} />

        </Tab.Navigator>
    )
}
