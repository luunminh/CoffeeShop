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
import MainContainer from './components/Maincontainer';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
export default function App() {


  let [fontsLoaded] = useFonts({
    "Rosarivo": require('./assets/fonts/Rosarivo-Regular.ttf'),
  })
  const Stack = createNativeStackNavigator();


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
            < Stack.Screen
              options={{
                headerShown: false,
              }}
              name='LoadingScreen' component={LoadingScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='DetailItem' component={DetailItem} />
            <Stack.Screen
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
              name='MainContainer' component={MainContainer} />
          </Stack.Navigator>
        </AppProvider>
      </AuthProvider>
    </NavigationContainer >

  );
}

