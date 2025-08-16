import { View, Image } from "react-native-web"
import { LoginField } from "../components/LoginField"
import { ButtonDefault } from "../components/ButtonDefault"
import EStyleSheet from "react-native-extended-stylesheet"
import { globalStyles } from "../assets/styles/GlobalStyles"
import { useEffect, useState } from "react"

const styles = EStyleSheet.create({
    ...globalStyles,
})


export const LoginScreen = () => {
    return (
        <View style={[styles.screenCenter, styles.bgDefault]}>
            <Image source={require('../assets/images/logo.png')} style={styles.logoDefault} resizeMode='contain' />
            <LoginField type={"E-Mail"} icon={require("../assets/images/mail_line_icon.png")} password={false} />
            <LoginField type={"Senha"} icon={require("../assets/images/lock_line_icon.png")} password={true} />
            <ButtonDefault title={"Fazer login"} />
        </View>
    )
}