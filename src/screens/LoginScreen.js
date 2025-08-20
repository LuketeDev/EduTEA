import { View, Image, Text } from "react-native-web"
import { AuthField } from "../components/AuthField"
import { ButtonDefault } from "../components/ButtonDefault"
import EStyleSheet from "react-native-extended-stylesheet"
import { globalStyles } from "../assets/styles/GlobalStyles"
import { Pressable } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"
import { useState } from "react"

const styles = EStyleSheet.create({
    ...globalStyles,
    footer: {
        marginBottom: 30,
    },
    footerText: {
        textDecorationLine: 'underline',
        fontSize: '1.5rem',
    },
})


export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Preencha todos os campos.')
            return;
        }

        try {
            const storedUsers = await AsyncStorage.getItem('@user_data');
            const usersArray = storedUsers ? JSON.parse(storedUsers) : [];
            const user = usersArray.find(u => u.email === email);

            if (!user) {
                Alert.alert('Erro', 'Usuário inexistente');
                return;
            }

            if (user.password === password) {
                //Login ok
                Alert.alert('Bem vindo')
                navigation.replace('Questions');
            } else {
                //Login not ok
                Alert.alert('Senha ou email incorretos')
            }
        } catch (err) {
            Alert.alert('Erro', 'Falha ao validar login');
            console.log(err);
        }
    }

    return (
        <View style={[styles.screenCenter, styles.bgDefault, { justifyContent: 'space-between' }]}>
            <View style={[styles.screenCenter, styles.whMax]}>
                <Image source={require('../assets/images/logo.png')} style={styles.logoDefault} resizeMode='contain' />
                <AuthField type={"E-Mail"} icon={require("../assets/images/mail_line_icon.png")} password={false} onChangeText={setEmail} value={email} />
                <AuthField type={"Senha"} icon={require("../assets/images/lock_line_icon.png")} password={true} onChangeText={setPassword} value={password} />
                <ButtonDefault title={"Fazer login"} onPress={handleLogin} size={['80%', '10%']} border={24} />
            </View>
            <View style={styles.footer}>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.authFooterText}>
                        Criar conta
                    </Text>
                </Pressable>
            </View>
        </View >
    )
}