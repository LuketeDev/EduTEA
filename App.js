// From libs
import { useEffect } from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
// Local
import { LoginScreen } from "./src/screens/LoginScreen";
import { SplashScreen } from "./src/screens/SplashScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuestionScreen } from './src/screens/QuestionScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {

    const clearStorageOnWeb = async () => {
      if (__DEV__ && typeof document !== 'undefined') {
        try {
          // await AsyncStorage.removeItem('@user_data');
          console.log('AsyncStorage limpo no reload (web)');
        } catch (err) {
          console.error('Erro ao limpar AsyncStorage:', err);
        }
      }
    };

    clearStorageOnWeb();
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Questions" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Questions' component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}