import { View, Text, Button, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { globalStyles } from "../assets/styles/GlobalStyles";

const styles = EStyleSheet.create({
    ...globalStyles,
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: '10%',
        borderRadius: 24,
        marginBottom: 24,
        padding: '.75rem',
    },
    btnTitle: {
        fontSize: '1.75rem',
        textAlign: 'center',
        color: '#f2d7d5'
    },
})


export const ButtonDefault = ({ title, onPress, size, border }) => {
    return (
        <TouchableOpacity style={[styles.button, styles.bgPrimaryDefault, styles.centerContent, { width: size[0], height: size[1], borderRadius: border }]} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    )
}