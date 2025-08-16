import { View, Text, Button, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { globalStyles } from "../assets/styles/GlobalStyles";

const styles = EStyleSheet.create({
    ...globalStyles,
    buttonSubmit: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: '10%',
        borderRadius: 24,
        marginBottom: 24,
        padding: '1.25rem',
    },
    btnTitle: {
        fontSize: '1.75rem',
        textAlign: 'center',
        color: '#f2d7d5'
    },
})


export const ButtonDefault = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.buttonSubmit, styles.bgPrimaryDefault, styles.centerContent]} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    )
}