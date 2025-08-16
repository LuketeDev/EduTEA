import { View, Image, Text } from "react-native-web"
import { AuthField } from "../components/AuthField"
import { ButtonDefault } from "../components/ButtonDefault"
import EStyleSheet from "react-native-extended-stylesheet"
import { globalStyles } from "../assets/styles/GlobalStyles"
import { Pressable } from "react-native"
import { useState } from "react"
import { Alert } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const styles = EStyleSheet.create({
    ...globalStyles,
    footer: {
        marginBottom: 30,
    },
})



export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (!email || !username || !password) {
            Alert.alert('Erro', 'Preencha todos os campos.')
            return;
        }

        try {
            const storedUsers = await AsyncStorage.getItem('@user_data');
            const usersArray = storedUsers ? JSON.parse(storedUsers) : [];
            const userID = usersArray.length + 1;
            const userData = { userID, email, username, password };
            usersArray.push(userData);
            await AsyncStorage.setItem('@user_data', JSON.stringify(usersArray));
            setEmail('');
            setUsername('');
            setPassword('');
            navigation.navigate('Login');
        } catch (err) {
            Alert.alert('Erro', 'Falha ao registrar usuário');
            console.log(err);
        }
    }

    return (
        <View style={[styles.screenCenter, styles.bgDefault, { justifyContent: 'space-between' }]}>
            <View style={[styles.screenCenter, styles.whMax]}>
                <Image source={require('../assets/images/logo.png')} style={styles.logoDefault} resizeMode='contain' />
                <AuthField type={"E-Mail"} icon={require("../assets/images/mail_line_icon.png")} password={false} onChangeText={setEmail} value={email} />
                <AuthField type={"Nome"} icon={require("../assets/images/user_line_icon.png")} password={false} onChangeText={setUsername} value={username} />
                <AuthField type={"Senha"} icon={require("../assets/images/lock_line_icon.png")} password={true} onChangeText={setPassword} value={password} />
                <ButtonDefault title={"Registrar"} onPress={handleRegister} />
            </View>
            <View style={styles.footer}>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.authFooterText}>
                        Fazer login
                    </Text>
                </Pressable>
            </View>
        </View >
    )
}