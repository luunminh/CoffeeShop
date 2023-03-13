import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import Colors from "./components/Colors/index";
import SignUpScreen from './components/SignUpScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerStyle: { backgroundColor: Colors.bgColor }, title: '' }}>
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

