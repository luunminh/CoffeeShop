import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// new
import { useFonts } from 'expo-font';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import DetailItem from './components/UI/DetailItem';
import Colors from "./components/Colors/index";
import SignUpScreen from './components/SignUpScreen';
import HomeScreen from './components/Maincontainer/Home';
import MainContainer from './components/Maincontainer';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import UserContainer from './components/Usercontainer';
import UserInfoScreen from './components/Usercontainer/UserInfo';
import TermOfUseScreen from './components/Usercontainer/TermOfUse';
import AboutUsScreen from './components/Usercontainer/AboutUs';
import ContactScreen from './components/Usercontainer/Contact';

export default function App() {

  let [fontsLoaded] = useFonts({
    "Rosarivo": require('./assets/fonts/Rosarivo-Regular.ttf'),
  })
  const Stack = createNativeStackNavigator(

  );



  if (!fontsLoaded) {
    return undefined
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppProvider>
          <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{
            headerStyle: { backgroundColor: Colors.bgColor, height: 50 }
            , title: '', headerTintColor: Colors.activeColor, headerShadowVisible: false,
            headerBackTitleStyle: { paddingLeft: 10, }
          }}>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name='LoadingScreen' component={LoadingScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='DetailItem' component={DetailItem} />
            <Stack.Screen
              name='UserInfoScreen'
              component={UserInfoScreen}
              options={{
                headerStyle: { backgroundColor: '#736D73', height: 50 }
                , title: 'Account Settings', headerTintColor: "#FFF", headerTitleAlign: 'center',
                headerBackTitleStyle: { paddingLeft: 10, }
              }} />
            <Stack.Screen
              name='ContactScreen'
              component={ContactScreen}
              options={{
                headerStyle: { backgroundColor: Colors.bgColor, height: 50 }
                , title: 'Contact', headerTintColor: "#FFF", headerTitleAlign: 'center',
                headerBackTitleStyle: { paddingLeft: 10, }
              }} />
            <Stack.Screen
              name='TermOfUseScreen'
              component={TermOfUseScreen}
              options={{
                headerStyle: { backgroundColor: Colors.bgColor, height: 50 }
                , headerTintColor: "#FFF",
                headerBackTitleStyle: { paddingLeft: 10, }
              }} />

            <Stack.Screen
              name='AboutUsScreen'
              component={AboutUsScreen}
              options={{
                headerStyle: { backgroundColor: Colors.bgColor, height: 50 }
                , headerBackTitleStyle: { paddingLeft: 10, }
              }} />


            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
              name='UserContainer' component={UserContainer} />
            <Stack.Screen
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
              name='MainContainer' component={MainContainer} />
          </Stack.Navigator>
        </AppProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

