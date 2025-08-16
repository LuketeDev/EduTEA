import { View, Image, Text } from "react-native-web"
import { AuthField } from "../components/AuthField"
import { ButtonDefault } from "../components/ButtonDefault"
import EStyleSheet from "react-native-extended-stylesheet"
import { globalStyles } from "../assets/styles/GlobalStyles"
import { Pressable } from "react-native"

const styles = EStyleSheet.create({
    ...globalStyles,
    footer: {
        marginBottom: 30,
    },
})


export const RegisterScreen = ({ navigation }) => {
    return (
        <View style={[styles.screenCenter, styles.bgDefault, { justifyContent: 'space-between' }]}>
            <View style={[styles.screenCenter, styles.whMax]}>
                <Image source={require('../assets/images/logo.png')} style={styles.logoDefault} resizeMode='contain' />
                <AuthField type={"E-Mail"} icon={require("../assets/images/mail_line_icon.png")} password={false} />
                <AuthField type={"Nome"} icon={require("../assets/images/user_line_icon.png")} password={false} />
                <AuthField type={"Senha"} icon={require("../assets/images/lock_line_icon.png")} password={true} />
                <ButtonDefault title={"Registrar"} />
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