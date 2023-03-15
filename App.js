import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// new
import { useFonts } from 'expo-font';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import Colors from "./components/Colors/index";
import SignUpScreen from './components/SignUpScreen';
import MainContainer from './components/Maincontainer';
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
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerStyle: { backgroundColor: Colors.bgColor }, title: '', headerTintColor: Colors.activeColor }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='LoadingScreen' component={LoadingScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='MainContainer' component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

