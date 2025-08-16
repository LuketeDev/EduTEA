import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/LoginScreen";
import { SplashScreen } from "./src/screens/SplashScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {

    const clearStorageOnWeb = async () => {
      if (__DEV__ && typeof document !== 'undefined') {
        try {
          await AsyncStorage.removeItem('@user_data');
          console.log('AsyncStorage limpo no reload (web)');
        } catch (err) {
          console.error('Erro ao limpar AsyncStorage:', err);
        }
      }
    };

    clearStorageOnWeb();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}